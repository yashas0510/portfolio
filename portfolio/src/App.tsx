import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Linkedin, ExternalLink, MapPin } from "lucide-react"

type ProjectProps = {
  title: string
  link: string
  description: string
  tags: string[]
}

type ContactProps = {
  icon: React.ReactNode
  href: string
  text: string
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-12 font-sans">

      {/* Header */}
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Yashas Bansode
        </h1>

        <p className="mt-2 text-blue-400 font-medium">
          Cybersecurity Enthusiast
        </p>

        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          Motivated cybersecurity enthusiast with experience in digital forensics,
          OSINT tools, web development, network security, and ethical hacking.
        </p>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider text-blue-300">
          Projects
        </h2>

        <div className="grid gap-8">
          <Project
            title="Port Scanner"
            link="https://github.com/yashas0510/Port-Scanner"
            description="Tool to scan and identify open ports on a network."
            tags={["Python", "Networking", "Security"]}
          />

          <Project
            title="Keylogger"
            link="https://github.com/yashas0510/keylogger"
            description="Python-based keylogger demonstrating security risks."
            tags={["Python", "Offensive Security"]}
          />

          <Project
            title="Hashed Password Cracker"
            link="https://github.com/yashas0510/Hashed-Password-Cracker"
            description="Dictionary-attack tool supporting MD5 and SHA-256."
            tags={["Python", "Hashing"]}
          />
        </div>
      </section>

      <Separator className="my-12 max-w-4xl mx-auto bg-blue-900" />

      {/* Contact */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider text-blue-300">
          Contact
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <ContactItem
            icon={<Mail />}
            href="mailto:yashas.bansode2003@gmail.com"
            text="Email"
          />

          <ContactItem
            icon={<Github />}
            href="https://github.com/yashas0510"
            text="GitHub"
          />

          <ContactItem
            icon={<Linkedin />}
            href="https://linkedin.com"
            text="LinkedIn"
          />
        </div>
      </section>

      <footer className="max-w-4xl mx-auto text-sm text-gray-500 mt-12 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Mumbai, India
      </footer>
    </main>
  )
}

/* ---------------- COMPONENTS ---------------- */

function Project({ title, link, description, tags }: ProjectProps) {
  return (
    <Card
      className="
        bg-[#3e4651]
        border-4 border-[#4a6fb3]
        shadow-[8px_8px_0px_#000]
        transition-all duration-200
        hover:-translate-y-1
        hover:border-[#5d87d6]
      "
    >
      <CardHeader>
        <CardTitle>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center gap-2"
          >
            {title}
            <ExternalLink className="w-4 h-4 text-blue-400" />
          </a>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge
              key={t}
              className="border-2 border-[#4a6fb3] text-white bg-transparent"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ContactItem({ icon, href, text }: ContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-3
        border-4 border-[#4a6fb3]
        bg-[#3e4651]
        px-4 py-3
        shadow-[6px_6px_0px_#000]
        hover:-translate-y-1
        transition-all
      "
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}