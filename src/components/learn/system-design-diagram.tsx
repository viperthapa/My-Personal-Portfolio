import {
  ArrowDown, ArrowLeftRight, ArrowRight, Boxes, Cable, CheckCircle2, CircleDot, Database,
  FileStack, Gauge, Globe2, HardDrive, Layers3, Network, Radio, Server, ShieldCheck, Split,
  Users, Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import type { SystemDesignDiagram as DiagramType } from "@/data/system-design";

const icons = [Server, Database, Globe2, HardDrive];

function Node({ children, tone = "neutral", icon }: { children: ReactNode; tone?: "neutral" | "primary" | "teal" | "warm" | "danger"; icon?: ReactNode }) {
  return <div className={`diagram-node diagram-node-${tone}`}>{icon}{children}</div>;
}

function Arrow({ direction = "right" }: { direction?: "right" | "down" | "both" }) {
  const Icon = direction === "down" ? ArrowDown : direction === "both" ? ArrowLeftRight : ArrowRight;
  return <Icon className="diagram-arrow" size={18} aria-hidden="true" />;
}

function DiagramCaption({ children }: { children: ReactNode }) {
  return <p className="diagram-caption">{children}</p>;
}

export function SystemDesignDiagram({ type, labels }: { type: DiagramType; labels: string[] }) {
  function renderDiagram() {
    if (type === "comparison") return <div className="diagram-split"><div className="diagram-choice diagram-choice-primary"><Network size={24} /><strong>{labels[0]}</strong><span>{labels[2]}</span><DiagramCaption>Simple to start</DiagramCaption></div><div className="diagram-choice diagram-choice-warm"><Boxes size={24} /><strong>{labels[1]}</strong><span>{labels[3]}</span><DiagramCaption>Independent pieces</DiagramCaption></div></div>;

    if (type === "load-balancer") return <div className="diagram-flow diagram-flow-wide"><Node tone="primary" icon={<Users size={17} />}>{labels[0]}</Node><Arrow /><Node tone="teal" icon={<Gauge size={17} />}>{labels[1]}</Node><Arrow /><div className="diagram-stack"><Node icon={<Server size={16} />}>{labels[2]}</Node><Node icon={<Server size={16} />}>{labels[3]}</Node><DiagramCaption>Traffic gets shared</DiagramCaption></div></div>;

    if (type === "cache") return <div className="diagram-flow diagram-flow-wide"><Node tone="primary" icon={<Server size={17} />}>{labels[0]}</Node><Arrow /><div className="diagram-cache-path"><Node tone="teal" icon={<Zap size={16} />}>{labels[1]}</Node><span className="diagram-pill">fast hit</span><Arrow direction="down" /><Node icon={<Database size={16} />}>{labels[2]}</Node><span className="diagram-pill">miss, then refill</span></div></div>;

    if (type === "replication") return <div className="diagram-replication"><Node tone="primary" icon={<Database size={17} />}>{labels[0]}</Node><div className="replication-line"><Arrow direction="down" /><span>{labels[3]}</span></div><div className="diagram-row"><Node icon={<Database size={16} />}>{labels[1]}</Node><Node icon={<Database size={16} />}>{labels[2]}</Node></div><DiagramCaption>One copy sends changes to others</DiagramCaption></div>;

    if (type === "sharding") return <div className="diagram-sharding"><Node tone="teal" icon={<Split size={17} />}>{labels[0]}</Node><Arrow direction="down" /><div className="diagram-row"><Node icon={<Database size={16} />}>{labels[1]}</Node><Node icon={<Database size={16} />}>{labels[2]}</Node><Node icon={<Database size={16} />}>{labels[3]}</Node></div><DiagramCaption>Different records, different homes</DiagramCaption></div>;

    if (type === "queue" || type === "communication") return <div className="diagram-flow diagram-flow-wide"><Node tone="primary" icon={<Radio size={17} />}>{labels[0]}</Node><Arrow /><Node tone="warm" icon={<Cable size={17} />}>{labels[1]}</Node><Arrow /><div className="diagram-stack"><Node icon={<Server size={16} />}>{labels[2]}</Node><Node icon={<Server size={16} />}>{labels[3]}</Node></div><DiagramCaption>{type === "queue" ? "Work waits safely" : "Work finishes later"}</DiagramCaption></div>;

    if (type === "cdn") return <div className="diagram-cdn"><Node tone="primary" icon={<Users size={17} />}>{labels[0]}</Node><div className="diagram-cdn-edges"><Node tone="teal" icon={<Globe2 size={16} />}>{labels[1]}</Node><Node tone="teal" icon={<Globe2 size={16} />}>{labels[2]}</Node></div><Arrow direction="down" /><Node tone="warm" icon={<Server size={17} />}>{labels[3]}</Node><DiagramCaption>Content takes the shorter route</DiagramCaption></div>;

    if (type === "metrics") return <div className="diagram-metrics"><div className="metric-tile"><CircleDot size={20} /><strong>Latency</strong><span>How long is one request?</span></div><Arrow direction="both" /><div className="metric-tile metric-tile-warm"><Gauge size={20} /><strong>Throughput</strong><span>How much work per second?</span></div></div>;

    if (type === "scale") return <div className="diagram-split"><div className="diagram-choice diagram-choice-primary"><Server size={24} /><strong>{labels[0]}</strong><span>{labels[2]}</span><DiagramCaption>Make one machine stronger</DiagramCaption></div><div className="diagram-choice diagram-choice-warm"><Boxes size={24} /><strong>{labels[1]}</strong><span>{labels[3]}</span><DiagramCaption>Add more machines</DiagramCaption></div></div>;

    if (type === "rate-limit") return <div className="diagram-flow diagram-flow-wide"><Node tone="primary" icon={<Users size={17} />}>{labels[0]}</Node><Arrow /><Node tone="warm" icon={<Gauge size={17} />}>{labels[1]}</Node><Arrow /><div className="diagram-rate-budget"><Node tone="teal" icon={<Zap size={16} />}>{labels[2]}</Node><span className="diagram-pill">requests left</span></div><Arrow /><Node icon={<Server size={17} />}>{labels[3]}</Node></div>;

    if (type === "consistency") return <div className="diagram-consistency"><Node tone="primary" icon={<Database size={17} />}>{labels[0]}</Node><Arrow /><div className="diagram-row"><Node tone="teal" icon={<Database size={16} />}>{labels[1]}</Node><Node tone="warm" icon={<Database size={16} />}>{labels[2]}</Node></div><Arrow /><Node icon={<Users size={17} />}>{labels[3]}</Node><DiagramCaption>Do both copies agree right away?</DiagramCaption></div>;

    if (type === "microservices") return <div className="diagram-services"><Node tone="primary" icon={<Users size={17} />}>Users</Node><Arrow direction="down" /><div className="diagram-row">{labels.map((label, index) => <Node key={label} tone={index % 2 === 0 ? "teal" : "warm"} icon={<Server size={16} />}>{label}</Node>)}</div><DiagramCaption>Each service owns one job</DiagramCaption></div>;

    if (type === "cap") return <div className="diagram-cap"><div className="cap-circle cap-consistency">{labels[0]}</div><div className="cap-circle cap-availability">{labels[1]}</div><div className="cap-circle cap-partition">{labels[2]}</div><DiagramCaption>When the network breaks, a trade-off appears</DiagramCaption></div>;

    if (type === "state") return <div className="diagram-split"><div className="diagram-choice diagram-choice-primary"><Server size={24} /><strong>Stateless</strong><span>{labels[2]}</span><DiagramCaption>Any server can help</DiagramCaption></div><div className="diagram-choice diagram-choice-warm"><Server size={24} /><strong>Stateful</strong><span>{labels[1]}</span><DiagramCaption>Memory stays nearby</DiagramCaption></div></div>;

    if (type === "fault-tolerance") return <div className="diagram-fault"><Node tone="primary" icon={<Users size={17} />}>{labels[0]}</Node><Arrow /><div className="diagram-row"><Node tone="teal" icon={<CheckCircle2 size={16} />}>{labels[1]}</Node><Node tone="danger" icon={<ShieldCheck size={16} />}>{labels[2]}</Node></div><Arrow direction="down" /><Node tone="warm" icon={<Zap size={16} />}>{labels[3]}</Node><DiagramCaption>Keep the important path working</DiagramCaption></div>;

    if (type === "sql" || type === "nosql" || type === "index") return <div className="diagram-data"><Node tone="primary" icon={<FileStack size={17} />}>{labels[0]}</Node><Arrow /><div className="diagram-row">{labels.slice(1).map((label, index) => { const Icon = type === "index" && index === 0 ? Zap : type === "nosql" ? FileStack : Database; return <Node key={label} tone={index === 0 ? "teal" : "neutral"} icon={<Icon size={16} />}>{label}</Node>; })}</div><DiagramCaption>{type === "index" ? "A shortcut to matching rows" : type === "nosql" ? "Flexible shapes for fast access" : "Related records stay organized"}</DiagramCaption></div>;

    return <div className="diagram-default"><Node tone="primary" icon={type === "monolith" ? <Layers3 size={17} /> : <Users size={17} />}>{labels[0]}</Node><Arrow direction="down" /><Node tone="teal" icon={<Server size={17} />}>{labels[1]}</Node><Arrow direction="down" /><div className="diagram-row">{labels.slice(2).map((label, index) => { const Icon = icons[index % icons.length]; return <Node key={label} icon={<Icon size={16} />}>{label}</Node>; })}</div><DiagramCaption>{type === "monolith" ? "Many features, one deploy" : "Follow the request"}</DiagramCaption></div>;
  }

  return <div className="system-diagram grid-dots" role="img" aria-label={`${labels.join(", ")} architecture diagram`}>{renderDiagram()}</div>;
}
