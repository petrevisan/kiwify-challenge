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

          <Button type="submit" className="py-6">
            Pagar agora
          </Button>
        </form>
      </Form>
    </div>
  );
}
