import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI Code Assistant work?",
    answer:
      "Our AI Code Assistant uses advanced language models trained on millions of code repositories. It analyzes your code context, understands your coding patterns, and provides intelligent suggestions in real-time. It supports over 30 programming languages and integrates seamlessly with popular IDEs.",
  },
  {
    question: "Is my code data secure and private?",
    answer:
      "Absolutely. We take security seriously. Your code is encrypted in transit and at rest. We never store your proprietary code on our servers permanently, and all processing happens in secure, isolated environments. We're SOC 2 compliant and follow industry best practices for data protection.",
  },
  {
    question: "Can I integrate DevAI Suite with my existing workflow?",
    answer:
      "Yes! DevAI Suite integrates with popular tools like VS Code, IntelliJ, GitHub, GitLab, Jira, and Slack. Our API allows custom integrations, and we support major CI/CD platforms like Jenkins, GitHub Actions, and Azure DevOps.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "We support 30+ programming languages including JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, Swift, Kotlin, and more. Our AI is continuously learning and adding support for new languages and frameworks.",
  },
  {
    question: "How accurate is the AI code review?",
    answer:
      "Our AI code review has a 95% accuracy rate in identifying bugs and security vulnerabilities. It's trained on millions of code reviews and continuously improves. However, we recommend it as a complement to, not a replacement for, human code review.",
  },
  {
    question: "Do you offer team and enterprise plans?",
    answer:
      "Yes, we offer flexible plans for teams and enterprises. Enterprise plans include advanced security features, custom integrations, dedicated support, and on-premise deployment options. Contact our sales team for custom pricing.",
  },
  {
    question: "Can I try DevAI Suite before purchasing?",
    answer:
      "We offer a 14-day free trial with full access to all features. No credit card required. You can also use our interactive demo to explore the capabilities before signing up.",
  },
  {
    question: "How does the rapid prototyping feature work?",
    answer:
      "Simply describe what you want to build in natural language, and our AI will generate working code for your chosen framework (React, Vue, Angular, etc.). It creates complete components, handles styling, and even sets up basic functionality. You can then customize and extend the generated code.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about DevAI Suite</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
