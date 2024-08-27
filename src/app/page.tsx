import { Feature } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[90vh] flex-grow flex flex-col items-center justify-center">
        <h2 className="scroll-m-20 text-white text-center pb-2 text-4xl w-[800px] font-semibold">
          O Bot de Moderação Definitivo para Discord
        </h2>
        <p className="text-lg text-gray-400 text-center mb-4">
          Gerencie seu servidor com eficiência e segurança, tudo em um só lugar.
        </p>
        <Button className="gap-2 mt-4">
          <FaDiscord color="black" size={20} />
          Adicione-me ao seu servidor
        </Button>
      </div>

      <div className="flex flex-grow gap-5rem justify-center grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-300">
            Por que escolher o Name Bot?
          </p>
          <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight">
            O Seu Assistente de Moderação Completo
          </h3>
          <p className="text-sm text-muted-foreground max-w-[706px]">
            Experimente uma nova era de moderação e gerenciamento de servidores
            com funcionalidades avançadas. O Name Bot oferece ferramentas
            intuitivas que facilitam a administração do seu servidor, permitindo
            que você se concentre no que realmente importa: construir uma
            comunidade vibrante. Com recursos de personalização e relatórios em
            tempo real, você terá total controle sobre a dinâmica do seu grupo.
          </p>
        </div>

        <div className="max-w-[25rem] space-y-6">
          <Feature
            title="Moderação Inteligente"
            icon={<Activity size={24} />}
            description={
              "Mantenha seu servidor seguro com ferramentas de moderação automatizadas que ajudam a evitar comportamentos indesejados."
            }
          />
          <Feature
            title="Personalização Total"
            icon={<Activity size={24} />}
            description={
              "Adapte o bot às suas necessidades com comandos personalizados e configurações flexíveis."
            }
          />
          <Feature
            title="Relatórios em Tempo Real"
            icon={<Activity size={24} />}
            description={
              "Receba atualizações instantâneas sobre a atividade do servidor e ações de moderação."
            }
          />
          <Feature
            title="Integrações Poderosas"
            icon={<Activity size={24} />}
            description={
              "Conecte-se a outras plataformas e serviços para uma experiência de gerenciamento ainda mais rica."
            }
          />
        </div>
      </div>

      <div className="bg-blue-700/80 flex flex-col items-center justify-center h-10rem my-5rem">
        <h1 className="scroll-m-20 text-2xl mb-2 mx-auto text-center font-extrabold tracking-tight xl:text-3xl max-w-[672px]">
          Crie o melhor servidor do Discord gratuitamente
        </h1>
        <Button>Adicionar ao Discord</Button>
      </div>

      <Footer />
    </div>
  );
}
