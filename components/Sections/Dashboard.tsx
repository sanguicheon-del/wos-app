import { ArrowRight, BarChart3, Bot, CircleDollarSign, LayoutGrid, ShieldCheck } from "lucide-react";
import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Typography from "@/components/Shared/Typography";
import Badge from "@/components/Shared/Badge";
import Card from "@/components/Shared/Card";
import GlassCard from "@/components/Shared/GlassCard";

export default function Dashboard() {
  return (
    <Section id="dashboard" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <Badge>Dashboard showcase</Badge>
            <Typography as="h2" className="mt-6 text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              One view. Total control.
            </Typography>
            <Typography as="p" className="mt-5 text-lg leading-8 text-zinc-400">
              A calm command surface for operations, support, and growth — designed to feel effortless from the first glance.
            </Typography>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Live sync", icon: ShieldCheck },
                { label: "Instant insights", icon: BarChart3 },
                { label: "AI assistant", icon: Bot },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                    <Icon className="h-4 w-4 text-white" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          <GlassCard className="relative p-0">
            <div className="rounded-[28px] border border-white/10 bg-[#090909]/80 p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <Typography as="p" className="text-sm text-zinc-500">Operations center</Typography>
                  <Typography as="p" className="mt-1 text-base font-medium text-white">W° OS • Live workspace</Typography>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                  <CircleDollarSign className="h-4 w-4" />
                  +18.4%
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <Card className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Typography as="p" className="text-sm text-zinc-500">Revenue pulse</Typography>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-400">
                      Stable
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    {[44, 58, 52, 66, 74, 82].map((height, index) => (
                      <div key={height} className="flex-1 rounded-t-full bg-gradient-to-t from-white/20 to-white/70" style={{ height: `${height}px`, opacity: 0.7 + index * 0.04 }} />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>Q3</span>
                    <span>+12%</span>
                  </div>
                </Card>

                <div className="space-y-4">
                  <Card className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <LayoutGrid className="h-4 w-4 text-white" />
                      Active flows
                    </div>
                    <Typography as="p" className="text-3xl font-medium text-white">24</Typography>
                    <Typography as="p" className="text-sm text-zinc-500">Orders, support, and inventory synchronized in real time.</Typography>
                  </Card>

                  <Card className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Bot className="h-4 w-4 text-white" />
                      AI brief
                    </div>
                    <Typography as="p" className="text-base text-zinc-300">“Customer sentiment is improving. Priority queue is healthy.”</Typography>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      Review details
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}
