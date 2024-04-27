import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { CardFeature } from "@/components/cardfeature";
import { FaComputer, FaUpload } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-[20rem] xl:mx-[10rem]">
        <div className="flex justify-between items-center mb-[40vh] ">
          <div className="xl:w-[29rem] xs:text-center xl:ml-[3.5rem]">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Gerencie seu Servidor com <br /> eficiencia tudo em so um
            </h4>
            <p className="text-base text-gray-300 text-pretty my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur delectus corrupti nostrum veniam optio laudantium
              beatae.
            </p>
            <Button>Me Adicione</Button>
          </div>
          <div className="mr-[9rem] xs:hidden">
            <Image
              src="https://cdn.discordapp.com/avatars/1067532640594448414/bd5fdf1aed032f2fdee5c515cfe7a8fb.png"
              width={164}
              height={164}
              className="rounded-full "
              alt="icon logo"
            ></Image>
          </div>
        </div>
        <div className="text-center mb-[20vh]">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Funcionalidades
            </h4>
            <p className="text-base text-gray-300 text-pretty my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center items-center gap-4">
              <CardFeature
                icon={<FaComputer size={40} />}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          doloribus rem sed maiores"
                title="configuração personalizado"
              />
              <CardFeature
                icon={<FaUpload size={40} />}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          doloribus rem sed maiores"
                title="Atualização Frequente"
              />
              <CardFeature
                icon={<FaComputer size={40} />}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          doloribus rem sed maiores"
                title="24h Suporte"
              />
            </div>
          </div>
        </div>
        <div id="about" className="flex justify-center items-center gap-5rem ">
          <div className="xs:hidden">
            <Image
              src="https://cdn.discordapp.com/avatars/1067532640594448414/bd5fdf1aed032f2fdee5c515cfe7a8fb.png"
              width={238}
              height={254}
              className="rounded-full object-contain"
              alt="icon logo"
            />
          </div>
          <div className="bg-white shadow-[0_0_15px_4px_rgb(255,255,255)] rounded-xl text-black xl:w-[36rem] xs:w-[23.8rem]">
            <div className="mx-8 my-2">
              <div>
                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Descubra sobre o bot
                </h4>
                <p className="text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis sint dolor tenetur ratione.
                </p>
                <div className="mx-4">
                  <Accordion type="single" collapsible className="">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        Lorem ipsum dolor sit.
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
