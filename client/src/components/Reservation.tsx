import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FooterPage } from "./Footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import "../index.css";
import { Calendar } from "./ui/calendar";
import NavLogo from "../assets/images/logo.svg";
import { CitySelect } from "./CitySelect";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { submitReservation } from "../lib/api";
import galVideo1 from "../assets/images/Gallery/video1.mp4";
import { LucideInfo } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "../index.css";

const schema = z.object({
  name: z
    .string()
    .min(2, "Ime mora imati najmanje 2 slova.")
    .refine(
      (val) =>
        /^[A-Za-zČĆŽŠĐčćžšđ]+ [A-Za-zČĆŽŠĐčćžšđ]+( [A-Za-zČĆŽŠĐčćžšđ]+)*$/.test(
          val.trim()
        ),
      {
        message: "Vrednosti nisu dobro unešene.",
      }
    ),
  email: z.string().email("Unesite validan email."),
  phone: z
    .string()
    .min(6, "Broj telefona mora imati najmanje 6 cifara.")
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Broj telefona može sadržati samo cifre.",
    }),
  city: z.string().min(2, "Grad je obavezan."),
  variant: z.enum(
    [
      "bouncecastle",
      "bubblehouse",
      "minibouncecastle",
      "paket1",
      "paket2",
      "paket3",
      "paket4",
    ],
    {
      required_error: "Morate odabrati varijantu",
    }
  ),
  decorations: z.boolean().default(false),
  date: z
    .string()
    .min(
      1,
      "Datum je obavezan, ili otprilike kako bi znali okvirno da se orijentišemo."
    ),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof schema>;

export const ReservationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = React.useState<Date[] | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<string>("bubblehouse");
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ReservationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      variant: "bubblehouse",
      decorations: false,
      date: "",
      specialRequests: "",
    },
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: ReservationFormData) => {
    try {
      await submitReservation(data);
      setModalVisible(true);
      form.reset();
      setStep(1);
    } catch (error) {
      alert(
        "Došlo je do greške prilikom slanja rezervacije. Pokušajte ponovo ili nas kontaktirajte putem email-a ili broja telefona."
      );
      console.error(error);
    }
  };

  const validateStep = async (currentStep: number) => {
    try {
      // Proveri samo polja koja su relevantna za taj step
      if (currentStep === 1) {
        await form.trigger(["variant", "decorations", "date"]);
      } else if (currentStep === 2) {
        await form.trigger(["name", "email", "phone", "city"]);
      } else if (currentStep === 3) {
        await form.trigger(["specialRequests"]);
      }

      // trigger vraća true ako su validna polja
      return form.formState.isValid;
    } catch (err) {
      return false;
    }
  };

  return (
    <div>
      <div className="w-full relative md:h-screen xs:h-auto xs:mb-0 xs:mt-15 md:mt-20 md:mb-0 flex flex-col justify-center items-center">
        <div className="md:w-fit xs:w-full xs:px-2 flex flex-col justify-center items-center text-center">
          <h2 className="md:!text-2xl/2 xs:!text-2xl/2 !font-medium w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary">
            Rezervacija
          </h2>
          <p className="text-quinary! font-light! xs:text-base!">
            Ispunite kratku formu kako bi zabavu doveli do Vas i Vaših
            najmilijih.
          </p>
        </div>
        <div className="w-full md:p-0 xs:p-4 relative h-full xs:justify-center xs:items-center md:items-center flex md:flex-row xs:flex-col">
          <div className="md:w-1/4 xs:w-full xs:h-[25vh] md:h-4/5 flex relative md:rounded-bl-3xl md:rounded-tl-3xl md:rounded-tr-none xs:rounded-tl-3xl xs:rounded-tr-3xl md:justify-center md:items-start xs:justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={galVideo1}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              preload="auto"
              poster="/fallback.jpg"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 backdrop-brightness-125 z-10" />
            <img className="w-15 flex z-40" src={NavLogo} alt="logo_img" />
            <h2 className="text-white! z-40 flex text-center items-center justify-center">
              <span className="text-secondary z-20">J</span>ump&
              <span className="text-secondary z-20">F</span>un
            </h2>
          </div>
          <div className="md:w-1/2 xs:w-full xs:h-full md:h-4/5 flex flex-col relative rounded-3xl md:-ml-5 xs:-mt-4 md:mt-0 z-20 drop-shadow-md bg-quaternary items-center md:pt-0">
            <div className="flex flex-col w-full md:h-full xs:justify-center pb-5 pl-10 pr-10 pt-5 items-center">
              <Progress className="w-2/3 flex mb-2" value={(step / 3) * 100} />
              <Form {...form}>
                <form
                  className="flex flex-col relative justify-between md:h-full items-center w-full h-auto md:pt-0 xs:pt-0"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  {step === 1 && (
                    <div className="grid grid-cols-5 md:gap-3 xs:gap-1 xs:auto-rows-min md:auto-rows-auto">
                      <div className="col-span-5 mt-2 row-span-1">
                        <FormField
                          control={form.control}
                          name="variant"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="label-text">
                                Odaberi program :{" "}
                                <button
                                  className="cursor-pointer"
                                  onClick={() => {
                                    navigate("/paketi");
                                  }}
                                >
                                  <span className="!text-sm !text-secondary !font-light flex items-center">
                                    (Niste sigurni? Klikni za više Info)
                                    <LucideInfo className="text-secondary" />
                                  </span>
                                </button>
                              </FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    setSelectedVariant(value);
                                  }}
                                  value={field.value}
                                  defaultValue={selectedVariant}
                                >
                                  <SelectTrigger className="w-full bg-quaternary text-quinary border-0! outline-none! focus:ring-0! rounded-lg shadow-sm pl-2">
                                    <SelectValue placeholder="" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-quaternary text-quinary border-0! outline-none! focus:ring-0! rounded-lg pl-2">
                                    <SelectGroup>
                                      <SelectLabel></SelectLabel>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="bouncecastle"
                                      >
                                        Veliki Dvorac
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="bubblehouse"
                                      >
                                        Bubble House
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="minibouncecastle"
                                      >
                                        Mali Dvorac
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="paket1"
                                      >
                                        Paket 1
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="paket2"
                                      >
                                        Paket 2
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="paket3"
                                      >
                                        Paket 3
                                      </SelectItem>
                                      <SelectItem
                                        className="cursor-pointer"
                                        value="paket4"
                                      >
                                        Paket 4
                                      </SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="md:col-span-2 md:col-start-1 xs:col-span-5 md:row-span-3 md:row-start-3">
                        <FormField
                          control={form.control}
                          name="decorations"
                          render={({ field }) => (
                            <FormItem className="">
                              <FormLabel></FormLabel>
                              <FormControl>
                                <div className="flex flex-row gap-5">
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) =>
                                      field.onChange(checked === true)
                                    }
                                    className=""
                                  />

                                  <div className="grid gap-1.5 leading-none">
                                    <label
                                      htmlFor="terms1"
                                      className="label-text"
                                    >
                                      Dodatne dekoracije
                                    </label>
                                    <span className="text-xs text-quinary! opacity-70">
                                      Ova usluga se posebno naplaćuje.
                                    </span>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="md:col-span-3 md:col-start-3 xs:col-span-5 md:row-span-3 md:row-start-3 xs:row-start-3 md:justify-items-end xs:justify-items-center">
                        <Calendar
                          mode="multiple"
                          selected={date}
                          onSelect={(selectedDates) => {
                            setDate(selectedDates);
                            form.setValue(
                              "date",
                              selectedDates?.[0]
                                ? format(selectedDates[0], "yyyy-MM-dd")
                                : ""
                            );
                          }}
                          className="xs:max-w-full text-xs rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="grid grid-cols-5 grid-rows-4 gap-1 w-full">
                      <div className="col-span-5 row-span-1">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ime i Prezime</FormLabel>
                              <FormControl>
                                <Input
                                  className="bg-quaternary text-quinary border-0 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg pl-2"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-5 row-span-1">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  className="bg-quaternary text-quinary border-0 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg pl-2"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-5 row-span-1">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon</FormLabel>
                              <FormControl>
                                <Input
                                  className="bg-quaternary text-quinary border-0 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg pl-2"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-5 row-span-2">
                        <Controller
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mesto dešavanja</FormLabel>
                              <FormControl>
                                <CitySelect
                                  onSelectCity={field.onChange}
                                  className="bg-quaternary text-quinary border-0! outline-none! focus-visible:ring-2! focus-visible:ring-primary! rounded-lg! pl-2!"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Posebni zahtevi</FormLabel>
                            <FormControl>
                              <textarea
                                className="bg-quaternary text-quinary border-0 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg pl-2 resize-y min-h-[100px] w-full shadow-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  <div className="flex justify-around w-full mt-6">
                    {step > 1 && (
                      <button
                        className="py-2 px-8 rounded-lg text-white bg-quinary cursor-pointer"
                        type="button"
                        onClick={() => setStep(step - 1)}
                      >
                        Nazad
                      </button>
                    )}
                    {step < 3 && (
                      <button
                        className="py-2 px-8 rounded-lg text-white bg-quinary cursor-pointer"
                        type="button"
                        onClick={async () => {
      if (step === 2) {
        // Samo ovde proveravamo obavezna polja
        const isStepValid = await validateStep(step);
        if (isStepValid) {
          setStep(step + 1);
        } else {
          console.log("Popuni obavezna polja");
        }
      } else {
        // Ako je step 1, slobodno ide dalje
        setStep(step + 1);
      }
    }}
                      >
                        Dalje
                      </button>
                    )}
                    {step === 3 && (
                      <button
                        className="py-2 px-8 rounded-lg text-white bg-primary cursor-pointer"
                        type="submit"
                      >
                        Posalji
                      </button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
          {modalVisible && (
            <div className="fixed inset-0 p-4 bg-[rgba(0,0,0,0.8)] flex items-center justify-center z-50">
              <div className="bg-quaternary rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
                <h3 className="text-xl! text-quinary font-semibold mb-4">
                  Uspešno poslato!
                </h3>
                <p className="text-lg! mb-6 text-quinary">
                  Hvala! Kontaktiraćemo Vas u najkraćem vremenu.
                </p>
                <button
                  className="py-2 px-8 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
                  onClick={() => {
                    setModalVisible(false);
                    setTimeout(() => navigate("/"), 300);
                  }}
                >
                  Zatvori
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};
