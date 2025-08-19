import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export const AddHomeSection1 = () => {
  return (
    <div className="p-6">
        <div className="mt-10 flex flex-col items-center max-w-2xl mx-auto">
          <h2 className="md:!text-2xl/2 xs:text-lg/2 w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary !font-medium">
            ❓ Najčešća pitanja
          </h2>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full space-y-2"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Razvoj kreativnosti i mašte
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                Atraktivni mehurići i svetlosni efekti stvaraju magičan ambijent u kojem deca mogu da zamišljaju svoje svetove, igraju se uloga i osmišljavaju originalne igre.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Sigurno okruženje
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Meka konstrukcija, stabilna baza i providni materijali omogućavaju zabavu uz minimalan rizik od povreda, a roditelji imaju preglednost nad decom iz svakog ugla.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Fizicka aktivnost i motorika</AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Prostor podstiče aktivne igre – penjanje, puzanje, trčanje i nešto drugačiji oblik igre koja jača finu i grubu motoriku bez osećaja “vežbanja”.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Wow-faktor i vizuelna atrakcija
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Bilo da se koristi na proslavama ili za fotografisanje, BubbleHouse izgleda spektakularno i ostavlja snažan utisak, kako na decu tako i na odrasle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  )
}
