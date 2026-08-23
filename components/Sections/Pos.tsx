import { ArrowRight, CreditCard, PackageCheck, Sparkles, Store } from "lucide-react";
import Section from "@/components/Shared/Section";
import Container from "@/components/Shared/Container";
import Typography from "@/components/Shared/Typography";
import Badge from "@/components/Shared/Badge";
import Card from "@/components/Shared/Card";
import GlassCard from "@/components/Shared/GlassCard";

export default function Pos() {
  return (
    <Section id="pos" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <GlassCard className="p-0">
            <div className="rounded-[28px] border border-white/10 bg-[#090909]/80 p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <Typography as="p" className="text-sm text-zinc-500">Point of sale</Typography>
                  <Typography as="p" className="mt-1 text-base font-medium text-white">Checkout flow</Typography>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                  <Store className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { name: "Aero Chair", price: "$420", status: "Ready" },
                  { name: "Lumen Desk", price: "$980", status: "Packed" },
                  { name: "Halo Lamp", price: "$180", status: "Ready" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <Typography as="p" className="text-sm text-white">{item.name}</Typography>
                      <Typography as="p" className="text-sm text-zinc-500">{item.status}</Typography>
                    </div>
                    <Typography as="p" className="text-sm text-zinc-300">{item.price}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <div className="max-w-2xl">
            <Badge>POS experience</Badge>
            <Typography as="h2" className="mt-6 text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Fast, quiet, dependable.
            </Typography>
            <Typography as="p" className="mt-5 text-lg leading-8 text-zinc-400">
              A premium checkout experience designed for speed, clarity, and calm confidence at the point of purchase.
            </Typography>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <CreditCard className="h-4 w-4 text-white" />
                  Flexible payments
                </div>
                <Typography as="p" className="text-base text-zinc-300">Support for cards, wallets, and split payments with zero friction.</Typography>
              </Card>

              <Card className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <PackageCheck className="h-4 w-4 text-white" />
                  Inventory aware
                </div>
                <Typography as="p" className="text-base text-zinc-300">Stock updates and fulfillment statuses stay visible throughout the flow.</Typography>
              </Card>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
              <Sparkles className="h-4 w-4 text-white" />
              Designed for seamless in-store and omnichannel moments.
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
