import {
  FormContainer,
  FormContent,
  Container,
  FormInputsContainer,
  InputCEP,
  InputStreet,
  InputNumberOfHome,
  ContainerInfo,
  InputComplementOfAdress,
  InputNeighborhood,
  InputCity,
  InputUF,
  PaymentContainer,
  PaymentContent,
  FormOfPaymentContainer,
  CreditCardButton,
  DebitCardButton,
  MoneyButton,
} from "./style";

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

import { useForm } from "react-hook-form";

const NewOrderForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const dataInput = watch("CEP");

  const getInfosCEP = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${dataInput}/json/`);
    const data = await response.json();
    const { logradouro, siafi, complemento, bairro, localidade, uf } = data;
    setValue("street", logradouro);
    setValue("NumberOfHome", siafi);
    setValue("ComplementOfAdress", complemento);
    setValue("Neighborhood", bairro);
    setValue("city", localidade);
    setValue("UF", uf);
  };

  return (
    <>
      <FormContainer>
        <FormContent>
          <Container>
            <MapPinLine color="#C47F17" size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Container>
          <FormInputsContainer>
            <InputCEP
              type="number"
              placeholder="CEP"
              {...register("CEP")}
              onBlur={getInfosCEP}
            />
            <InputStreet
              type="text"
              placeholder="Rua"
              {...register("street")}
            />
            <div>
              <InputNumberOfHome
                type="number"
                placeholder="Número"
                {...register("NumberOfHome")}
              />
              <ContainerInfo>
                <InputComplementOfAdress
                  type="text"
                  placeholder="Complemento"
                  {...register("ComplementOfAdress")}
                />
                <span>Opcional</span>
              </ContainerInfo>
            </div>
            <div>
              <InputNeighborhood
                type="text"
                placeholder="Bairro"
                {...register("Neighborhood")}
              />
              <InputCity
                type="text"
                placeholder="Cidade"
                {...register("city")}
              />
              <InputUF type="text" placeholder="UF" />
            </div>
          </FormInputsContainer>
        </FormContent>
      </FormContainer>
      <PaymentContainer>
        <PaymentContent>
          <CurrencyDollar color="#8047F8" size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentContent>
        <FormOfPaymentContainer>
          <CreditCardButton type="button">
            <CreditCard size={16} color="#8047F8" />
            cartão de crédito
          </CreditCardButton>
          <DebitCardButton type="button">
            <Bank size={16} color="#8047F8" />
            cartão de débito
          </DebitCardButton>
          <MoneyButton type="button">
            <Money size={16} color="#8047F8" />
            dinheiro
          </MoneyButton>
        </FormOfPaymentContainer>
      </PaymentContainer>
    </>
  );
};

export { NewOrderForm };
