import { TerminalWindow, CodeBlock, TerminalPrompt } from "@/components/TerminalWindow";
import { ConversionForm } from "@/components/ConversionForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen matrix-bg">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-error-red mb-2">2 AM Again.</span>
            <span className="block text-foreground mb-2">Another Critical System Down.</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Only You Can Fix It.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            The technical debt is suffocating your innovation. The team looks to you for answers you're making up as you go.
          </p>

          <TerminalWindow title="system-status.sh" className="max-w-3xl mx-auto mb-16">
            <TerminalPrompt 
              command="system_status --check-sanity"
              output={
                <div className="space-y-2">
                  <div className="terminal-error">ERROR: CTO burnout level critical. No backup available.</div>
                  <div className="terminal-error">WARN: Technical debt growing faster than resolution rate</div>
                  <div className="terminal-error">FATAL: Work-life balance not found</div>
                  <div className="text-muted-foreground">
                    <span className="terminal-prompt">$ </span>
                    <span className="typing-animation">Searching for solutions...</span>
                  </div>
                </div>
              }
            />
          </TerminalWindow>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-error-red">
              The CTO of One Death Spiral
            </h2>
          </div>

          <CodeBlock language="javascript" className="max-w-4xl mx-auto mb-12">
            <div className="space-y-1">
              <div><span className="code-keyword">const</span> <span className="text-foreground">ctoLife</span> = &#123;</div>
              <div className="pl-4">
                <span className="text-foreground">technicalDebt</span>: <span className="code-string">"Growing faster than you can pay it down"</span>,
              </div>
              <div className="pl-4">
                <span className="text-foreground">teamExpectations</span>: <span className="code-string">"They think you know everything"</span>,
              </div>
              <div className="pl-4">
                <span className="text-foreground">realityCheck</span>: <span className="code-string">"You're googling solutions like everyone else"</span>,
              </div>
              <div className="pl-4">
                <span className="text-foreground">sleepSchedule</span>: <span className="code-string">"What's sleep?"</span>,
              </div>
              <div className="pl-4">
                <span className="text-foreground">workLifeBalance</span>: <span className="code-keyword">undefined</span>,
              </div>
              <div className="pl-4">
                <span className="text-foreground">mentalHealth</span>: <span className="code-string">"Deprecated"</span>
              </div>
              <div>&#125;;</div>
            </div>
          </CodeBlock>

          <TerminalWindow title="stress-metrics.log" className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <TerminalPrompt 
                command='grep "technical debt" ~/career/stress_log.txt | wc -l'
                output="847 instances of firefighting this month"
              />
              <TerminalPrompt 
                command="uptime"
                output="System has been running on caffeine for 47 days"
              />
              <TerminalPrompt 
                command='ps aux | grep "weekend"'
                output="No matching processes found"
              />
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Isolation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="code-comment">// TODO: Find someone who understands</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Architecture Decisions",
                description: "Architecture decisions that keep you up at night with no one to discuss them with"
              },
              {
                title: "Code Reviews",
                description: "Code reviews where you're the only senior voice in the room"
              },
              {
                title: "Security Incidents", 
                description: "Security incidents where the CEO asks 'how bad is it' and you're winging the answer"
              },
              {
                title: "Innovation Roadmap",
                description: "Innovation roadmap that exists only in your overwhelmed mind"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border glow-effect hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <Badge variant="outline" className="font-mono text-xs">
                    CRITICAL
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary font-mono">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your AI Senior Engineering Team
            </h2>
          </div>

          <CodeBlock language="python" className="max-w-4xl mx-auto">
            <div className="space-y-1">
              <div><span className="code-keyword">class</span> <span className="text-foreground">AIEngineeringTeam</span>:</div>
              <div className="pl-4"><span className="code-keyword">def</span> <span className="text-foreground">__init__</span>(<span className="text-foreground">self</span>):</div>
              <div className="pl-8">
                <span className="text-foreground">self</span>.<span className="text-foreground">technical_debt</span> = <span className="text-foreground">TechnicalDebtManager</span>()
              </div>
              <div className="pl-8">
                <span className="text-foreground">self</span>.<span className="text-foreground">security</span> = <span className="text-foreground">SecurityOperationsCenter</span>()
              </div>
              <div className="pl-8">
                <span className="text-foreground">self</span>.<span className="text-foreground">code_review</span> = <span className="text-foreground">SeniorDeveloper</span>(<span className="text-foreground">experience</span>=<span className="code-string">"20+ years"</span>)
              </div>
              <div className="pl-8">
                <span className="text-foreground">self</span>.<span className="text-foreground">architecture</span> = <span className="text-foreground">SystemArchitect</span>(<span className="text-foreground">availability</span>=<span className="code-string">"24/7"</span>)
              </div>
              <div className="mt-4 pl-4">
                <span className="code-keyword">def</span> <span className="text-foreground">handle_crisis</span>(<span className="text-foreground">self</span>, <span className="text-foreground">issue</span>):
              </div>
              <div className="pl-8">
                <span className="code-keyword">return</span> <span className="text-foreground">self</span>.<span className="text-foreground">solve_immediately</span>(<span className="text-foreground">issue</span>)
              </div>
              <div className="pl-8">
                <span className="code-comment"># No more 3 AM panic sessions</span>
              </div>
            </div>
          </CodeBlock>
        </div>
      </section>

      {/* Conversion Form */}
      <ConversionForm />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="code-comment">// </span>
            Built for technical leaders who refuse to accept that 2 AM is part of the job description.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;