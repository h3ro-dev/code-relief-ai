import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { TerminalWindow } from "./TerminalWindow";
import { submitLead } from "@/lib/lead";

const techStacks = [
  "React/Next.js", "Vue/Nuxt", "Angular", "Node.js", "Python/Django", 
  "Ruby on Rails", "PHP/Laravel", "Java/Spring", "C#/.NET", 
  "Go", "Rust", "Kubernetes", "Docker", "AWS", "Azure", "GCP"
];

export const ConversionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    techStack: [] as string[],
    teamSize: "",
    painLevel: [7],
    challenges: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTechStackChange = (tech: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      techStack: checked 
        ? [...prev.techStack, tech]
        : prev.techStack.filter(t => t !== tech)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { ok, error } = await submitLead(formData as any);
      if (!ok) {
        console.error("Lead submission failed:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const painLabels = {
    1: "Manageable chaos",
    3: "Weekly firefighting",
    5: "Daily emergencies", 
    7: "Constant crisis mode",
    10: "Everything is on fire"
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Your First Uninterrupted Weekend in Years
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Technical assessment with someone who actually understands the depth of your challenges
          </p>
        </div>

        <TerminalWindow title="technical-assessment.form" className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="name" className="text-sm font-mono text-code-comment">
                # What do your commits say?
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Senior Engineer, CTO, Tech Lead..."
                className="bg-secondary/50 border-border font-mono"
                required
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="email" className="text-sm font-mono text-code-comment">
                # Primary contact for emergencies?
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@company.com"
                className="bg-secondary/50 border-border font-mono"
                required
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-mono text-code-comment">
                # Tech stack you're responsible for
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {techStacks.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      id={tech}
                      checked={formData.techStack.includes(tech)}
                      onCheckedChange={(checked) => handleTechStackChange(tech, checked as boolean)}
                      className="border-border"
                    />
                    <Label htmlFor={tech} className="text-sm font-mono cursor-pointer">
                      {tech}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="teamSize" className="text-sm font-mono text-code-comment">
                # How many developers look to you for answers?
              </Label>
              <Select value={formData.teamSize} onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                <SelectTrigger className="bg-secondary/50 border-border font-mono">
                  <SelectValue placeholder="Select team size..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Just me (solo developer)</SelectItem>
                  <SelectItem value="small">2-5 developers</SelectItem>
                  <SelectItem value="medium">6-15 developers</SelectItem>
                  <SelectItem value="large">16-50 developers</SelectItem>
                  <SelectItem value="enterprise">50+ developers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              <Label className="text-sm font-mono text-code-comment">
                # Current pain level (1-10)
              </Label>
              <div className="space-y-4">
                <Slider
                  value={formData.painLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, painLevel: value }))}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground font-mono">
                  <span>1</span>
                  <span className="text-center text-primary font-semibold">
                    {formData.painLevel[0]}: {painLabels[formData.painLevel[0] as keyof typeof painLabels]}
                  </span>
                  <span>10</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="challenges" className="text-sm font-mono text-code-comment">
                # Biggest technical challenge keeping you up at night?
              </Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                placeholder="Technical debt, security concerns, scaling issues, team dependencies..."
                className="bg-secondary/50 border-border font-mono min-h-[100px]"
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full glow-effect bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg py-6"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  Initializing...
                </span>
              ) : (
                "Initialize AI Engineering Support"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground font-mono">
              <span className="text-code-comment">// </span>
              No spam. Just technical solutions for technical leaders.
            </p>
          </form>
        </TerminalWindow>
      </div>
    </section>
  );
};
