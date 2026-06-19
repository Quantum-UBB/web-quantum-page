'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const linksRef = useRef([]);
  const photonsRef = useRef([]);
  const nebulaRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const rafRef = useRef(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const CLUSTER_COLS = 4;
    const CLUSTER_ROWS = 4;
    const CLUSTER_RADIUS = 200;
    const NODES_PER_CLUSTER = 12;
    const NODE_RADIUS = 5.5;
    const NODE_SPEED = 0.02;
    const NEIGHBORS = 2; //limit connections per node for a clean mesh
    const MAX_LINK_DISTANCE = 260;
    const LINE_OPACITY = 0.4;
    const PHOTON_COUNT = 55;
    const PHOTON_SPEED = 0.005;
    const PHOTON_RADIUS = 2.0;
    const NEBULA_COUNT = 160;
    const NEBULA_SPEED = 0.025;
    const MOUSE_RADIUS = 100;
    const REPULSION_FORCE = 0.5;
    const HOME_FORCE = 0.003;
    const MAX_SPEED = 1.2;
    const FRICTION = 0.94;

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      dimensionsRef.current = { width, height };

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initNetwork(width, height);
    };

    const initNetwork = (width, height) => {
      const clusters = [];
      for (let r = 0; r < CLUSTER_ROWS; r++) {
        for (let c = 0; c < CLUSTER_COLS; c++) {
          const baseX = (c + 0.5) * width / CLUSTER_COLS;
          const baseY = (r + 0.5) * height / CLUSTER_ROWS;
          const jitterX = (Math.random() - 0.5) * (width / CLUSTER_COLS) * 0.45;
          const jitterY = (Math.random() - 0.5) * (height / CLUSTER_ROWS) * 0.45;
          clusters.push({ x: baseX + jitterX, y: baseY + jitterY });
        }
      }

      const nodes = [];
      let id = 0;
      for (let c = 0; c < clusters.length; c++) {
        const cluster = clusters[c];
        for (let i = 0; i < NODES_PER_CLUSTER; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.sqrt(Math.random()) * CLUSTER_RADIUS;
          const x = cluster.x + Math.cos(angle) * distance;
          const y = cluster.y + Math.sin(angle) * distance;
          nodes.push({
            id: id++,
            x,
            y,
            homeX: x,
            homeY: y,
            vx: (Math.random() - 0.5) * NODE_SPEED,
            vy: (Math.random() - 0.5) * NODE_SPEED,
            radius: NODE_RADIUS,
            pulseOffset: Math.random() * Math.PI * 2,
            clusterIndex: c,
          });
        }
      }
      nodesRef.current = nodes;

      linksRef.current = buildLinks(nodes);

      const links = linksRef.current;
      const photons = [];
      for (let i = 0; i < PHOTON_COUNT; i++) {
        photons.push({
          linkIndex: Math.floor(Math.random() * links.length),
          progress: Math.random(),
          speed: PHOTON_SPEED * (0.7 + Math.random() * 0.6),
        });
      }
      photonsRef.current = photons;

      const nebula = [];
      for (let i = 0; i < NEBULA_COUNT; i++) {
        nebula.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * NEBULA_SPEED,
          vy: (Math.random() - 0.5) * NEBULA_SPEED,
          radius: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.06 + 0.02,
        });
      }
      nebulaRef.current = nebula;
    };

    const buildLinks = (nodes) => {
      const links = [];

      // Each node connects to its NEIGHBORS closest nodes within MAX_LINK_DISTANCE.
      for (let i = 0; i < nodes.length; i++) {
        const distances = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_LINK_DISTANCE) {
            distances.push({ index: j, dist });
          }
        }
        distances.sort((a, b) => a.dist - b.dist);
        for (let k = 0; k < NEIGHBORS && k < distances.length; k++) {
          const j = distances[k].index;
          const exists = links.some(
            (l) => (l.source === i && l.target === j) || (l.source === j && l.target === i)
          );
          if (!exists) {
            links.push({ source: i, target: j, dist: distances[k].dist });
          }
        }
      }

      // Ensure the entire graph is one connected component.
      // If there are isolated sub-graphs, bridge them with the shortest possible links.
      const adj = Array.from({ length: nodes.length }, () => []);
      for (const l of links) {
        adj[l.source].push(l.target);
        adj[l.target].push(l.source);
      }

      const findComponents = () => {
        const visited = new Array(nodes.length).fill(false);
        const components = [];
        for (let i = 0; i < nodes.length; i++) {
          if (!visited[i]) {
            const comp = [];
            const stack = [i];
            visited[i] = true;
            while (stack.length) {
              const u = stack.pop();
              comp.push(u);
              for (const v of adj[u]) {
                if (!visited[v]) {
                  visited[v] = true;
                  stack.push(v);
                }
              }
            }
            components.push(comp);
          }
        }
        return components;
      };

      let components = findComponents();
      while (components.length > 1) {
        let minDist = Infinity;
        let bestPair = null;

        for (let i = 0; i < components.length; i++) {
          for (let j = i + 1; j < components.length; j++) {
            for (const u of components[i]) {
              for (const v of components[j]) {
                const dx = nodes[u].x - nodes[v].x;
                const dy = nodes[u].y - nodes[v].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minDist) {
                  minDist = dist;
                  bestPair = [u, v];
                }
              }
            }
          }
        }

        if (bestPair) {
          const [u, v] = bestPair;
          links.push({ source: u, target: v, dist: minDist });
          adj[u].push(v);
          adj[v].push(u);
        }

        components = findComponents();
      }

      return links;
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const handleWindowMouseOut = (e) => {
      if (!e.relatedTarget) {
        mouseRef.current = { x: null, y: null };
      }
    };

    const draw = () => {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const links = linksRef.current;
      const photons = photonsRef.current;
      const nebula = nebulaRef.current;
      const mouse = mouseRef.current;

      // Nebula dust
      for (const p of nebula) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 225, 157, ${p.alpha})`;
        ctx.fill();
      }

      // Move nodes
      for (const node of nodes) {
        // Gentle mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            node.vx += (dx / dist) * force * REPULSION_FORCE;
            node.vy += (dy / dist) * force * REPULSION_FORCE;
          }
        }

        // Spring force back to home position
        node.vx += (node.homeX - node.x) * HOME_FORCE;
        node.vy += (node.homeY - node.y) * HOME_FORCE;

        // Friction to prevent runaway velocity
        node.vx *= FRICTION;
        node.vy *= FRICTION;

        // Clamp speed
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > MAX_SPEED) {
          node.vx = (node.vx / speed) * MAX_SPEED;
          node.vy = (node.vy / speed) * MAX_SPEED;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

    // Draw links (same pairs always; lines stretch/move with the nodes)
    for (const link of links) {
      const a = nodes[link.source];
      const b = nodes[link.target];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const opacity = Math.max(0, (1 - Math.min(dist, MAX_LINK_DISTANCE * 1.5) / (MAX_LINK_DISTANCE * 1.5)) * LINE_OPACITY);
      ctx.beginPath();
      ctx.strokeStyle = `rgba(20, 225, 157, ${opacity})`;
      ctx.lineWidth = 0.8;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

      // Draw photons
      for (const photon of photons) {
        const link = links[photon.linkIndex];
        if (!link) continue;
        const a = nodes[link.source];
        const b = nodes[link.target];

        photon.progress += photon.speed;
        if (photon.progress > 1) {
          photon.progress = 0;
          photon.linkIndex = Math.floor(Math.random() * links.length);
        }

        const t = photon.progress;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;

        ctx.beginPath();
        ctx.arc(px, py, PHOTON_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowColor = '#14E19D';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes (qubits) with pulse
      const time = Date.now() * 0.002;
      for (const node of nodes) {
        const pulse = 0.6 + 0.4 * Math.sin(time + node.pulseOffset);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (2.4 + pulse), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 225, 157, ${0.12 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 225, 157, 0.95)';
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleWindowMouseOut);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleWindowMouseOut);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1]"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(20, 225, 157, 0.10) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 70%, rgba(20, 225, 157, 0.07) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 50%, rgba(20, 225, 157, 0.05) 0%, transparent 60%),
          #0F172A
        `,
      }}
    >
      {/* Uniform dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(20, 225, 157, 0.25) 1.5px, transparent 1.5px)',
          backgroundSize: '34px 34px',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
