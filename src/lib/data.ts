import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Server,
  Container,
  Boxes,
  GitBranch,
  Cpu,
  Database,
  Network,
  Workflow,
  Gauge,
  Activity,
  Bot,
  Sparkles,
  Code2,
  Terminal,
  Layers,
  ShieldCheck,
  Lock,
  Wrench,
  Rocket,
  Zap,
  LineChart,
  Brain,
  Search,
  Webhook,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Dhaneswara Rao Pachipulusu",
  monogram: "DP",
  primaryRole: "DevOps Engineer",
  secondaryRoles: ["Backend Engineer", "AI Applications Engineer"],
  roles: ["DevOps Engineer", "Backend Engineer", "AI Applications Engineer"],
  atCompany: "Backend Engineer & DevOps Engineer @ Nainovate AI",
  impact:
    "Designing, deploying, and scaling production systems on AWS and Kubernetes while building backend services and AI-powered applications.",
  tagline:
    "Designing, deploying, and scaling production systems on AWS and Kubernetes while building backend services and AI-powered applications.",
  shortBio:
    "DevOps & Backend Engineer who designs, deploys, scales, monitors, secures, and operates production systems end-to-end.",
  location: "India",
  email: "nainovate@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/DhaneshPachipulusu",
    // TODO: replace with your real LinkedIn URL
    linkedin: "https://www.linkedin.com/in/dhaneswara-rao-pachipulusu",
    email: "mailto:nainovate@gmail.com",
  },
  siteUrl: "https://dhaneshpachipulusu.github.io",
};

export type Role = (typeof profile.roles)[number];

/* Recruiter trust indicators — first impression */
export const trustIndicators: string[] = [
  "Production Deployments",
  "Kubernetes Experience",
  "AWS Cloud Infrastructure",
  "AI Product Development",
];

/* ------------------------------------------------------------------ */
/* Hero metrics                                                       */
/* ------------------------------------------------------------------ */

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { label: "Years Experience", value: 1, suffix: "+", icon: Activity },
  { label: "Production Deployments", value: 10, suffix: "+", icon: Rocket },
  { label: "AI Products Built", value: 3, suffix: "+", icon: Bot },
  { label: "CI/CD Automation", value: 100, suffix: "%", icon: Workflow },
];

/* ------------------------------------------------------------------ */
/* Live production dashboard (hero terminal)                          */
/* ------------------------------------------------------------------ */

export interface TermLine {
  label: string;
  value?: string;
  ok?: boolean;
}
export interface TermGroup {
  cmd: string;
  lines: TermLine[];
}

export const terminalGroups: TermGroup[] = [
  {
    cmd: "kubectl get pods",
    lines: [
      { label: "api-prod-6df7", value: "Running", ok: true },
      { label: "worker-prod-8a12", value: "Running", ok: true },
    ],
  },
  {
    cmd: "helm upgrade platform-prod",
    lines: [{ label: "Deployment successful", ok: true }],
  },
  {
    cmd: "gh workflow run deploy.yml",
    lines: [
      { label: "Build passed", ok: true },
      { label: "Tests passed", ok: true },
      { label: "Deploy passed", ok: true },
    ],
  },
  {
    cmd: "monitoring status",
    lines: [
      { label: "Prometheus healthy", ok: true },
      { label: "Grafana healthy", ok: true },
    ],
  },
  {
    cmd: "aws infrastructure",
    lines: [
      { label: "CloudFront active", ok: true },
      { label: "EC2 running", ok: true },
      { label: "SSL valid", ok: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* About highlights                                                   */
/* ------------------------------------------------------------------ */

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutHighlights: Highlight[] = [
  {
    title: "Cloud Engineering",
    description:
      "Design and operate AWS infrastructure — EC2, S3, CloudFront, Route53, VPC — built for scale, cost, and resilience.",
    icon: Cloud,
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, containerized workloads on Docker & Kubernetes, and infrastructure automation that ships safely.",
    icon: Workflow,
  },
  {
    title: "Backend Systems",
    description:
      "High-performance APIs with FastAPI, Node.js & Python backed by MongoDB, MySQL and Redis caching layers.",
    icon: Server,
  },
  {
    title: "Observability",
    description:
      "Prometheus metrics and Grafana dashboards for monitoring, alerting and real-time system insight.",
    icon: Activity,
  },
  {
    title: "Security & Reliability",
    description:
      "Least-privilege access, SSL, secrets hygiene and self-healing systems engineered to stay up under load.",
    icon: ShieldCheck,
  },
  {
    title: "AI Integrations",
    description:
      "Production RAG pipelines and LLM features with OpenAI, Gemini and vector search — as a supporting capability.",
    icon: Brain,
  },
];

/* ------------------------------------------------------------------ */
/* What I Build                                                       */
/* ------------------------------------------------------------------ */

export interface BuildItem {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  accent: string;
}

export const whatIBuild: BuildItem[] = [
  {
    title: "Cloud Infrastructure",
    description:
      "Provision and operate AWS environments built for scale, cost-efficiency and resilience.",
    icon: Cloud,
    items: ["EC2 · S3 · EBS", "CloudFront · Route53", "VPC networking", "SSL & DNS"],
    accent: "#38bdf8",
  },
  {
    title: "Backend Platforms",
    description:
      "High-performance APIs and services with clean architecture and reliable data layers.",
    icon: Server,
    items: ["FastAPI · Node.js", "REST APIs", "MongoDB · MySQL", "Redis caching"],
    accent: "#818cf8",
  },
  {
    title: "DevOps Automation",
    description:
      "Containerized delivery and CI/CD pipelines that turn commits into safe production releases.",
    icon: Workflow,
    items: ["Docker · Kubernetes", "GitHub Actions · Jenkins", "Nginx · Linux", "Zero-downtime deploys"],
    accent: "#22d3ee",
  },
  {
    title: "AI-Powered Applications",
    description:
      "RAG pipelines and LLM features integrated into production products as a supporting capability.",
    icon: Brain,
    items: ["RAG pipelines", "OpenAI · Gemini", "Qdrant vector search", "AI agents"],
    accent: "#f472b6",
  },
  {
    title: "Internal Engineering Tools",
    description:
      "Dashboards, automation and developer tooling that remove operational toil.",
    icon: Wrench,
    items: ["Ops automation", "Monitoring dashboards", "Deploy tooling", "Scripts & CLIs"],
    accent: "#34d399",
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Nainovate AI",
    role: "Backend Engineer & DevOps Engineer",
    period: "July 2025 — Present",
    current: true,
    summary:
      "Own the full path to production across Backend, DevOps, Cloud and AI — from architecture and deployment to monitoring and reliability.",
    highlights: [
      "Built AI-powered customer support platforms serving production traffic",
      "Implemented RAG pipelines for enterprise knowledge retrieval over private data",
      "Managed cloud infrastructure and production deployments on AWS",
      "Built automated CI/CD pipelines for safe, repeatable releases",
      "Implemented Kubernetes-based deployment workflows with scaling and self-healing",
      "Integrated monitoring and observability using Prometheus and Grafana",
      "Worked across Backend, DevOps, Cloud and AI systems end-to-end",
    ],
    tags: ["AWS", "Kubernetes", "Docker", "CI/CD", "FastAPI", "Prometheus", "Grafana", "RAG"],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Digital — System Engineer (Offer)",
    period: "2025",
    summary:
      "Earned the premium TCS Digital System Engineer offer — recognition reserved for top-tier engineering talent.",
    highlights: [
      "Cleared the TCS National Qualifier for the premium Digital track",
      "Offered the System Engineer role focused on modern engineering and cloud",
    ],
    tags: ["Achievement", "System Engineer"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects (engineering case studies)                                */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "AI" | "Backend" | "DevOps" | "Platform";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  categories: ProjectCategory[];
  icon: LucideIcon;
  accent: string;
  problem: string;
  features: string[];
  architecture: string[];
  stack: string[];
  challenges: string;
  solution: string;
  deployment: string[];
  /** Hosting / infrastructure details (honest current state). */
  infrastructure: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  /** Optional links — only rendered when present. */
  repo?: string;
  demo?: string;
  /** Architecture diagram id to deep-link into the Architecture section. */
  archHash?: string;
  /** Honest status badge, e.g. private/company or not-yet-deployed. */
  status?: { label: string; tone: "private" | "wip" | "live" | "source" };
  /** Honest hosting status line shown in the case study. */
  hosting?: { label: string; tone: "infra" | "live" | "local" | "private" };
}

export const projects: Project[] = [
  {
    slug: "ai-interview-bot",
    title: "AI Interview Bot",
    tagline: "Automated technical interviews & resume scoring — shipped with a full Docker → Kubernetes CI/CD pipeline.",
    categories: ["DevOps", "Backend", "AI", "Platform"],
    icon: Bot,
    accent: "#38bdf8",
    problem:
      "Hiring teams spend hours screening resumes and running first-round interviews. The goal: an automated system that scores resumes, runs adaptive AI interviews and produces structured candidate reports — packaged so it can actually ship to production, not just run on localhost.",
    features: [
      "Resume scoring & analysis",
      "Adaptive AI-driven interviews",
      "Structured candidate reports",
      "Learning notes & job recommendations",
      "Next.js dashboard UI",
      "Containerized & production-ready",
    ],
    architecture: [
      "FastAPI backend orchestrating interview sessions and scoring",
      "Google Gemini + OpenAI for question generation & evaluation",
      "SQLite + JSON document store for sessions, reports and parsed resumes",
      "Next.js frontend served as a standalone container",
      "Nginx reverse proxy with SSL in front of the services",
    ],
    stack: ["FastAPI", "Python", "Next.js", "Google Gemini", "OpenAI", "SQLite", "Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Nginx"],
    challenges:
      "Taking a working app from localhost to a reproducible, observable production deployment — the whole delivery pipeline, not just the AI.",
    solution:
      "Multi-stage Docker images for backend and frontend, a GitHub Actions pipeline (build → test → Trivy scan → push to GHCR), Kubernetes manifests via kustomize plus a Helm chart, Terraform for infrastructure, and Prometheus/Grafana wired to a /metrics endpoint.",
    deployment: [
      "Multi-stage Docker images pushed to GHCR via GitHub Actions (with Trivy scan)",
      "Kubernetes deploy via kustomize + a Helm chart (HPA, probes, secrets)",
      "Terraform for infrastructure as code; Nginx + SSL at the edge",
      "Prometheus scraping /metrics, visualized in Grafana",
    ],
    infrastructure: [
      "Oracle Cloud ARM instance (24 GB RAM) — provisioned",
      "Docker + docker compose for the full stack",
      "Nginx reverse proxy + SSL termination",
      "Kubernetes (kustomize + Helm) manifests ready",
    ],
    results: [
      "Runs fully containerized — backend & frontend verified healthy",
      "One-command local stack via docker compose",
      "Reproducible, observable, production-style delivery",
    ],
    metrics: [
      { label: "Delivery", value: "CI/CD" },
      { label: "Orchestration", value: "K8s + Helm" },
      { label: "Monitoring", value: "Prom + Grafana" },
    ],
    repo: "https://github.com/DhaneshPachipulusu/ai-bot",
    archHash: "cicd",
    status: { label: "Public · source on GitHub", tone: "source" },
    hosting: { label: "Infra ready · Oracle Cloud ARM · not yet public", tone: "infra" },
  },
  {
    slug: "jarvis-ai-assistant",
    title: "Jarvis — AI Voice Assistant",
    tagline: "Offline, wake-word voice assistant for Windows, powered by Google Gemini.",
    categories: ["AI", "Backend"],
    icon: Sparkles,
    accent: "#818cf8",
    problem:
      "Routine desktop tasks and quick lookups constantly break focus. The goal: a hands-free, wake-word voice assistant that runs locally on Windows, holds natural conversations and automates everyday actions.",
    features: [
      "Offline wake-word detection",
      "Voice commands & speech I/O",
      "Natural conversations via Google Gemini",
      "Windows software automation",
      "Productivity shortcuts",
      "Local-first, privacy-friendly",
    ],
    architecture: [
      "Python core with a wake-word listener and intent router",
      "Offline speech-to-text + text-to-speech pipeline",
      "Google Gemini conversation layer with context memory",
      "Automation modules for Windows apps, files and system actions",
    ],
    stack: ["Python", "Google Gemini", "Speech I/O", "Windows", "Automation"],
    challenges:
      "Reliable offline wake-word detection and low-latency voice interaction without a constant network round-trip.",
    solution:
      "Ran wake-word detection locally, streamed Gemini responses, and debounced audio input with a graceful fallback when intent confidence was low.",
    deployment: [
      "Runs as a local app on Windows",
      "Modular skill registry for adding new commands",
    ],
    infrastructure: [
      "Local-first — runs on the user's Windows machine",
      "Python virtual environment, no server required",
      "Offline wake-word; only LLM calls leave the device",
    ],
    results: [
      "Hands-free control of common Windows workflows",
      "Extensible skill/command architecture",
      "Natural, context-aware conversations",
    ],
    metrics: [
      { label: "Runs", value: "Offline" },
      { label: "Platform", value: "Windows" },
      { label: "LLM", value: "Gemini" },
    ],
    repo: "https://github.com/DhaneshPachipulusu/Jarvis",
    status: { label: "Public · source on GitHub", tone: "source" },
    hosting: { label: "Local desktop app · no hosting needed", tone: "local" },
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support Platform",
    tagline: "Multi-tenant RAG support platform with an AI copilot for agents.",
    categories: ["AI", "Backend", "DevOps", "Platform"],
    icon: Webhook,
    accent: "#22d3ee",
    problem:
      "Support teams drown in repetitive tickets and scattered knowledge. The goal: a multi-tenant platform that answers from a company's own knowledge base and gives human agents an AI copilot.",
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge base semantic search",
      "Ticket intelligence & routing",
      "AI copilot for agents",
      "Support automation",
      "Multi-tenant architecture",
    ],
    architecture: [
      "FastAPI services per tenant with isolated data boundaries",
      "Ingestion → chunking → embeddings → Qdrant vector DB",
      "RAG query flow with re-ranking and grounded LLM answers",
      "Redis for caching hot retrievals and sessions",
      "Kubernetes deployment with Prometheus/Grafana monitoring",
    ],
    stack: ["FastAPI", "RAG", "Qdrant", "Redis", "Kubernetes", "Prometheus", "Grafana", "AWS"],
    challenges:
      "Strict per-tenant data isolation while keeping retrieval fast and the platform horizontally scalable.",
    solution:
      "Namespaced vector collections per tenant, per-tenant auth boundaries, Redis caching for hot paths, and Kubernetes-driven horizontal scaling.",
    deployment: [
      "Containerized services deployed to Kubernetes",
      "CI/CD pipeline with automated rollout and rollback",
      "Prometheus + Grafana for monitoring and alerting",
    ],
    infrastructure: [
      "Kubernetes-orchestrated services (per-tenant isolation)",
      "Redis caching layer for hot retrievals",
      "Prometheus + Grafana observability stack",
      "Built and operated within Nainovate AI infrastructure",
    ],
    results: [
      "Deflected repetitive tickets with grounded answers",
      "Faster agent resolution via the AI copilot",
      "Horizontally scalable, observable platform",
    ],
    metrics: [
      { label: "Tenancy", value: "Multi-tenant" },
      { label: "Scaling", value: "Horizontal" },
      { label: "Observability", value: "Full-stack" },
    ],
    archHash: "kubernetes",
    status: { label: "Private · built at Nainovate AI", tone: "private" },
    hosting: { label: "Private · runs on Nainovate AI infrastructure", tone: "private" },
  },
];

export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "DevOps",
  "Backend",
  "AI",
  "Platform",
];

/* ------------------------------------------------------------------ */
/* Architecture showcase — vertical engineering flows                 */
/* ------------------------------------------------------------------ */

export type DiagramKind =
  | "aws"
  | "kubernetes"
  | "cicd"
  | "rag"
  | "observability";

export interface FlowNode {
  label: string;
  sub?: string;
  accent: string;
}

export interface ArchitectureCard {
  id: DiagramKind;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  flow: FlowNode[];
}

export const architectureCards: ArchitectureCard[] = [
  {
    id: "aws",
    title: "AWS Cloud Architecture",
    description:
      "User traffic flows through CloudFront and Nginx into FastAPI, persisting to MongoDB — fronted by SSL and Route53 DNS.",
    icon: Cloud,
    tags: ["CloudFront", "Nginx", "FastAPI", "MongoDB", "SSL"],
    flow: [
      { label: "User", sub: "request", accent: "#38bdf8" },
      { label: "CloudFront", sub: "CDN + SSL", accent: "#22d3ee" },
      { label: "Nginx", sub: "reverse proxy", accent: "#6366f1" },
      { label: "FastAPI", sub: "application", accent: "#818cf8" },
      { label: "MongoDB", sub: "data store", accent: "#34d399" },
    ],
  },
  {
    id: "kubernetes",
    title: "Kubernetes Architecture",
    description:
      "Ingress routes requests to frontend pods and backend pods, which read and write to the database — scaled and self-healed by the cluster.",
    icon: Boxes,
    tags: ["Ingress", "Frontend Pods", "Backend Pods", "Database"],
    flow: [
      { label: "Ingress", sub: "nginx controller", accent: "#38bdf8" },
      { label: "Frontend Pods", sub: "replicated", accent: "#22d3ee" },
      { label: "Backend Pods", sub: "replicated", accent: "#6366f1" },
      { label: "Database", sub: "persistent", accent: "#34d399" },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD Architecture",
    description:
      "A commit to GitHub triggers GitHub Actions, which builds and pushes an image to Docker Hub, then deploys to Kubernetes in production.",
    icon: Workflow,
    tags: ["GitHub", "Actions", "Docker Hub", "Kubernetes", "Production"],
    flow: [
      { label: "GitHub", sub: "git push", accent: "#38bdf8" },
      { label: "GitHub Actions", sub: "build · test", accent: "#22d3ee" },
      { label: "Docker Hub", sub: "image registry", accent: "#6366f1" },
      { label: "Kubernetes", sub: "rollout", accent: "#818cf8" },
      { label: "Production", sub: "live", accent: "#34d399" },
    ],
  },
  {
    id: "rag",
    title: "AI RAG Architecture",
    description:
      "A user query hits the API, is embedded, retrieves context from Qdrant, and the LLM returns a grounded response.",
    icon: Brain,
    tags: ["API", "Embeddings", "Qdrant", "LLM", "Response"],
    flow: [
      { label: "User", sub: "query", accent: "#38bdf8" },
      { label: "API", sub: "FastAPI", accent: "#22d3ee" },
      { label: "Embedding Model", sub: "vectorize", accent: "#6366f1" },
      { label: "Qdrant", sub: "vector search", accent: "#818cf8" },
      { label: "LLM", sub: "OpenAI / Gemini", accent: "#f472b6" },
      { label: "Response", sub: "grounded", accent: "#34d399" },
    ],
  },
  {
    id: "observability",
    title: "Observability Architecture",
    description:
      "Applications expose metrics scraped by Prometheus, visualized in Grafana dashboards with alerting on SLOs.",
    icon: Activity,
    tags: ["Application", "Prometheus", "Grafana", "Dashboards"],
    flow: [
      { label: "Application", sub: "/metrics", accent: "#38bdf8" },
      { label: "Prometheus", sub: "scrape · store", accent: "#6366f1" },
      { label: "Grafana", sub: "visualize", accent: "#34d399" },
      { label: "Dashboards", sub: "alerts · SLOs", accent: "#fbbf24" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  domain: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: "DevOps",
    icon: Workflow,
    accent: "#38bdf8",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Nginx", "Linux", "CI/CD"],
  },
  {
    domain: "Cloud",
    icon: Cloud,
    accent: "#22d3ee",
    skills: ["AWS", "EC2", "S3", "CloudFront", "Route53", "VPC", "EBS"],
  },
  {
    domain: "Backend",
    icon: Server,
    accent: "#818cf8",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs", "MongoDB", "MySQL", "Redis"],
  },
  {
    domain: "Observability",
    icon: Gauge,
    accent: "#34d399",
    skills: ["Prometheus", "Grafana", "Alerting", "Dashboards"],
  },
  {
    domain: "AI",
    icon: Brain,
    accent: "#f472b6",
    skills: ["OpenAI", "Gemini", "Qdrant", "RAG", "Vector DBs", "AI Agents"],
  },
];

/* ------------------------------------------------------------------ */
/* Engineering Principles                                             */
/* ------------------------------------------------------------------ */

export interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const engineeringPrinciples: Principle[] = [
  {
    title: "Automation First",
    description:
      "If it's done twice, it gets automated — builds, tests, deployments and operational toil.",
    icon: Workflow,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Versioned, reproducible, auditable environments. No snowflake servers, no surprises.",
    icon: Terminal,
  },
  {
    title: "Scalable Architecture",
    description:
      "Design for horizontal scale, statelessness and graceful degradation from day one.",
    icon: Network,
  },
  {
    title: "Observability-Driven Operations",
    description:
      "Metrics, logs and alerts on every service — you can't operate what you can't see.",
    icon: Activity,
  },
  {
    title: "Continuous Delivery",
    description:
      "Small, frequent, reversible releases with zero-downtime rollouts and fast rollback.",
    icon: GitBranch,
  },
  {
    title: "Security Mindset",
    description:
      "Least privilege, secrets hygiene, SSL and secure defaults baked into the pipeline.",
    icon: Lock,
  },
  {
    title: "Reliability Engineering",
    description:
      "SLOs, health checks and self-healing systems that stay up under real-world load.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/* Achievements                                                       */
/* ------------------------------------------------------------------ */

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: "TCS Digital System Engineer Offer",
    description:
      "Earned the premium TCS Digital track offer — recognition for top-tier engineering aptitude.",
    icon: Rocket,
  },
  {
    title: "Production AWS Deployments",
    description:
      "Provisioned, deployed and operated real-world workloads on AWS cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "Kubernetes Deployments",
    description:
      "Shipped containerized services to Kubernetes with scaling, self-healing and rolling updates.",
    icon: Boxes,
  },
  {
    title: "AI Product Development",
    description:
      "Built and integrated RAG and LLM-powered features into production AI products.",
    icon: Brain,
  },
  {
    title: "End-to-End Platform Ownership",
    description:
      "Owned products from architecture through deployment, monitoring and maintenance.",
    icon: Layers,
  },
];

/* ------------------------------------------------------------------ */
/* Modern Engineering Workflow                                        */
/* ------------------------------------------------------------------ */

export interface WorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "AI-Assisted Development",
    description:
      "Leverage AI tooling (Cursor, Claude, Copilot) to accelerate design, implementation and review without sacrificing quality.",
    icon: Sparkles,
  },
  {
    title: "Agentic Coding Workflows",
    description:
      "Orchestrate AI agents for scaffolding, refactoring and testing — keeping a human firmly in the loop on architecture.",
    icon: Bot,
  },
  {
    title: "Rapid Prototyping",
    description:
      "Validate ideas fast with throwaway spikes and tight feedback loops before committing to production design.",
    icon: Zap,
  },
  {
    title: "Fast MVP Delivery",
    description:
      "Ship a working, deployable MVP quickly, then iterate based on real usage and metrics.",
    icon: Rocket,
  },
  {
    title: "Automation-First Mindset",
    description:
      "Automate builds, tests, deployments and ops toil so engineering time goes to product, not plumbing.",
    icon: Workflow,
  },
  {
    title: "Infrastructure as Code",
    description:
      "Treat infrastructure as versioned, reproducible code for consistent, auditable environments.",
    icon: Terminal,
  },
];

/* ------------------------------------------------------------------ */
/* Marquee tech logos (text)                                          */
/* ------------------------------------------------------------------ */

export const marqueeTech: string[] = [
  "AWS", "Docker", "Kubernetes", "FastAPI", "Python", "Node.js", "GitHub Actions",
  "Jenkins", "Nginx", "Linux", "Prometheus", "Grafana", "MongoDB", "MySQL",
  "Redis", "OpenAI", "Gemini", "Qdrant", "RAG", "CI/CD", "Terraform",
];

/* Re-exported icons for convenience in components */
export const icons = {
  Cloud, Server, Container, Boxes, GitBranch, Cpu, Database, Network, Workflow,
  Gauge, Activity, Bot, Sparkles, Code2, Terminal, Layers, ShieldCheck, Lock,
  Wrench, Rocket, Zap, LineChart, Brain, Search, Webhook,
};
