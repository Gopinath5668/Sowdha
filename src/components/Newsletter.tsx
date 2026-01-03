import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-secondary/30 p-8 md:p-12 text-center max-w-3xl mx-auto transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-4 transition-all duration-300 hover:scale-110 hover:bg-primary/20">
              <Mail className="h-8 w-8 text-primary transition-transform duration-300 hover:rotate-12" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Stay updated with fresh deals
          </h2>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
            Get exclusive discounts, seasonal offers, and alerts about new products delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card border-border transition-all duration-300 focus:scale-105"
            />
            <Button size="lg" className="sm:w-auto w-full group">
              Subscribe
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
