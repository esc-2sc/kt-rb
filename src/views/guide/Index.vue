<template>
    <div class="design-guide">
        <div class="design-guide__title">Design UI</div>
        <GuideText></GuideText>
        <GuideColor></GuideColor>
        <Title></Title>
        <Icon></Icon>
        <Button></Button>
        <Input></Input>
        <Textarea></Textarea>
        <CheckboxRadioSwitch></CheckboxRadioSwitch>
        <Select></Select>
        <Tab></Tab>
        <Table></Table>
        <Paging></Paging>
        <Grid></Grid>
        <GridForm></GridForm>
        <Tooltip></Tooltip>
        <AlertMessage></AlertMessage>
        <ToastMessage></ToastMessage>
        <Snackbar></Snackbar>
        <User></User>
        <Popup></Popup>
        <Memo></Memo>

        <VrixList></VrixList>
        <VrixCombobox></VrixCombobox>
        <VrixDatefield></VrixDatefield>
        <VrixTree></VrixTree>
        <VrixAutocomplete></VrixAutocomplete>
        <VrixTokenizer></VrixTokenizer>
        <VrixPopup></VrixPopup>

        <ComponentComDropwDownBar></ComponentComDropwDownBar>
        <ComponentComPaging></ComponentComPaging>
    </div>
</template>

<script>
import GuideText from "@/views/guide/Text";
import GuideColor from "@/views/guide/Color";
import Title from "@/views/guide/Title";
import Icon from "@/views/guide/Icon";
import Button from "@/views/guide/Button";
import Input from "@/views/guide/Input";
import Textarea from "@/views/guide/Textarea";
import CheckboxRadioSwitch from "@/views/guide/CheckboxRadioSwitch";
import Select from "@/views/guide/Select";
import Tab from "@/views/guide/Tab";
import Table from "@/views/guide/Table";
import Paging from "@/views/guide/Paging";
import Grid from "@/views/guide/Grid";
import GridForm from "@/views/guide/GridForm";
import Tooltip from "@/views/guide/Tooltip";
import AlertMessage from "@/views/guide/AlertMessage";
import ToastMessage from "@/views/guide/ToastMessage";
import Snackbar from "@/views/guide/Snackbar";
import User from "@/views/guide/User";
import Popup from "@/views/guide/Popup";
import Memo from "@/views/guide/Memo";

import VrixList from "@/views/guide/VrixList";
import VrixCombobox from "@/views/guide/VrixCombobox";
import VrixDatefield from "@/views/guide/VrixDatefield";
import VrixTree from "@/views/guide/VrixTree";
import VrixAutocomplete from "@/views/guide/VrixAutocomplete";
import VrixTokenizer from "@/views/guide/VrixTokenizer";
import VrixPopup from "@/views/guide/VrixPopup";

import ComponentComDropwDownBar from "@/views/guide/ComponentComDropwDownBar";
import ComponentComPaging from "@/views/guide/ComponentComPaging";

export default {
    name: 'design-guide',
    components: {
        GuideText,
        Title,
        GuideColor,
        Icon,
        Button,
        Input,
        Textarea,
        CheckboxRadioSwitch,
        Select,
        Tab,
        Table,
        Paging,
        Grid,
        GridForm,
        Tooltip,
        AlertMessage,
        ToastMessage,
        Snackbar,
        User,
        Popup,
        Memo,

        VrixList,
        VrixCombobox,
        VrixDatefield,
        VrixTree,
        VrixAutocomplete,
        VrixTokenizer,
        VrixPopup,

        ComponentComDropwDownBar,
        ComponentComPaging,
    },
	data() {
		return {
        };
	},
    mounted() {
    },
    methods: {
	},
};
</script>
<style>
.design-guide{
    position: relative;
    margin-top:80px;
}
.design-guide .g-box-link__back{
    opacity: 0;
    pointer-events: none;
}
.design-guide .g-box-link__single{
    opacity: 1;
    pointer-events: auto;
}
.design-guide__title{
    position:absolute;
    left:0;
    top:0;
    transform: translateY(calc(-100% - 40px));
    font-family: Pretendard, sans-serif;
    font-weight: 500;
    font-size:30px;
    color:#fff;
    text-shadow: 0 3px 15px rgba(0,0,0,.2);
}
.g-box + .g-box{border-top:1px solid #e8e8e8;}
</style>
