import React from "react";
import Template from "../../components/template/template";
import { moderateScale } from "react-native-size-matters";
import {
  Container,
  NewPunchDate,
  Title,
  Hours,
  Icon,
  InfoContainer,
  InputWrapper,
  SelectWrapper,
} from "./new-punch-screen.styles";
import Button from "../../components/button/button";
import RHFSelect from "../../components/select/rhf-select";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import useNewPunchScreen from "./use-new-punch-screen";
import DatePicker from "@react-native-community/datetimepicker";
import Input from "@components/input/input";
import format from "date-fns/format";

const NewPunchScreen = () => {
  const {
    control,
    handleSubmit,
    navigation,
    today,
    onSubmit,
    setCurrentTimeInput,
    currentTimeInput,
    values,
    open,
    onDateChange,
  } = useNewPunchScreen();

  return (
    <>
      <Template>
        <Container>
          <Title>Novo Punch</Title>
          <InfoContainer>
            <NewPunchDate>{today}</NewPunchDate>
            <SelectWrapper>
              <RHFSelect
                height={30}
                control={control}
                name="project"
                items={[
                  { label: "Trainee", value: "trainee" },
                  { label: "Umbrella", value: "umbrella" },
                ]}
                placeholder={{ label: "Selecione o projeto", value: null }}
              />
            </SelectWrapper>
            <Hours>
              <Icon>
                <FontAwesome5
                  name="mug-hot"
                  size={moderateScale(18)}
                  color="grey"
                />
              </Icon>
              <InputWrapper onPress={() => setCurrentTimeInput("morningFrom")}>
                <Input
                  placeholder="08:00"
                  height={30}
                  name="morningFrom"
                  editable={false}
                  value={format(values["morningFrom"], "HH:mm")}
                />
              </InputWrapper>
              <InputWrapper onPress={() => setCurrentTimeInput("morningTo")}>
                <Input
                  placeholder="12:00"
                  height={30}
                  name="morningTo"
                  editable={false}
                  value={format(values["morningTo"], "HH:mm")}
                />
              </InputWrapper>
            </Hours>

            <Hours>
              <Icon>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={moderateScale(18)}
                  color="grey"
                />
              </Icon>
              <InputWrapper
                onPress={() => setCurrentTimeInput("afternoonFrom")}
              >
                <Input
                  placeholder="13:00"
                  height={30}
                  name="afternoonFrom"
                  editable={false}
                  value={format(values["afternoonFrom"], "HH:mm")}
                />
              </InputWrapper>
              <InputWrapper onPress={() => setCurrentTimeInput("afternoonTo")}>
                <Input
                  placeholder="18:00"
                  height={30}
                  name="afternoonTo"
                  editable={false}
                  value={format(values["afternoonTo"], "HH:mm")}
                />
              </InputWrapper>
            </Hours>
          </InfoContainer>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Salvar"
            variant="primary"
          />
          <Button
            onPress={() => navigation.navigate("PunchListScreen")}
            title="Cancelar"
            variant="secondary"
          />
        </Container>
      </Template>

      {open && (
        <DatePicker
          mode="time"
          value={values[currentTimeInput] || new Date()}
          onChange={onDateChange}
        />
      )}
    </>
  );
};

export default NewPunchScreen;
