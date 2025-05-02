"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { formatDocumentNumber } from "@/utils/DocNumber";
import { formatPhoneNumber } from "@/utils/Phone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  // SelectLabel,
  // SelectScrollDownButton,
  // SelectScrollUpButton,
  // SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaymentMethod from "@/components/organisms/PaymentMethod";
import { monthValues, yearValues, installments } from "@/utils/CardValues";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  confirmEmail: z.string().email({ message: "Email inválido" }),
  documentNumber: z
    .string()
    .min(11, { message: "Número de documento inválido" })
    .max(14, {
      message: "Número de documento inválido",
    })
    .refine((val) => cpf.isValid(val) || cnpj.isValid(val), {
      message: "Número de documento inválido",
    }),
  phone: z.string().regex(/^\d{11}$/, {
    message: "O telefone deve conter exatamente 11 dígitos numéricos",
  }),
  creditCardNumber: z
    .string()
    .min(1, { message: "Número do cartão é obrigatório" }),
  cardMonth: z.string().min(1, { message: "Mês é obrigatório" }),
  cardYear: z.string().min(1, { message: "Ano é obrigatório" }),
  cardSafeCode: z
    .string()
    .min(3, { message: "Código de segurança é obrigatório" })
    .max(4, { message: "Código de segurança inválido" }),
  installments: z.string().min(1, { message: "Parcelas obrigatórias" }),
});

export default function Checkout() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      confirmEmail: "",
      documentNumber: "",
      phone: "",
    },
  });

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} className="py-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" {...field} className="py-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Confirme e-mail"
                    {...field}
                    className="py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <FormField
              control={form.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormControl>
                    <Input
                      placeholder="CPF/CNPJ"
                      className="py-5"
                      maxLength={14}
                      {...field}
                      onChange={(e) =>
                        field.onChange(formatDocumentNumber(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      className="py-5"
                      {...field}
                      onChange={(e) =>
                        field.onChange(formatPhoneNumber(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Tabs defaultValue="card" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-12">
              <TabsTrigger value="card">
                <PaymentMethod text="Cartão" iconPath="/icons/card.svg" />
              </TabsTrigger>
              <TabsTrigger value="boleto">
                <PaymentMethod text="Boleto" iconPath="/icons/boleto.svg" />
              </TabsTrigger>
              <TabsTrigger value="pix">
                <PaymentMethod text="Pix" iconPath="/icons/pix.svg" />
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="card"
              className="bg-[#fafafa] px-5 py-3 rounded"
            >
              <div className="flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="creditCardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Número do cartão"
                          {...field}
                          className="py-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <FormField
                    control={form.control}
                    name="cardMonth"
                    render={({ field }) => (
                      <FormItem className="w-1/2 md:w-1/4">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Mês" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {monthValues.map(({ month }) => (
                              <SelectItem key={month} value={month}>
                                {month}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardYear"
                    render={({ field }) => (
                      <FormItem className="w-1/2 md:w-1/4">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Ano" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {yearValues.map(({ year }) => (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardSafeCode"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormControl>
                          <Input
                            placeholder="Código de segurança"
                            className="py-5"
                            maxLength={16}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="installments"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Ano" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {installments.map(({ value, text }) => (
                            <SelectItem key={value} value={value}>
                              {text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
            <TabsContent value="boleto">
              <div className="bg-[#ededed] p-8 rounded ">
                <h3 className="text-[16px] font-bold">
                  Informações sobre o pagamento via boleto:
                </h3>
                <ul className="font-normal list-disc pl-5">
                  <li>Valor à vista: R$ 499,90.</li>
                  <li>Não podemos parcelar Boleto.</li>
                  <li>Pode levar até 2 dias úteis para compensar.</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="pix">
              <div className="bg-[#ededed] p-8 rounded">
                <h3 className="text-[16px] font-bold">
                  Informações sobre o pagamento via pix:
                </h3>
                <ul className="font-normal list-disc pl-5">
                  <li>Liberação imediata!</li>
                  <li>
                    É simples, só usar o aplicativo de seu banco para pagar PIX.
                  </li>
                  <li>
                    Super seguro. O pagamento PIX foi desenvolvido pelo Banco
                    Central para facilitar pagamentos.
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
          <Button
            type="submit"
            className="py-6 bg-[#28b463] text-white font-bold"
          >
            Pagar agora
          </Button>
        </form>
      </Form>
    </div>
  );
}
