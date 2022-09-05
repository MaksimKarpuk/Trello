<template>
  <div :class="$style.wrapper">
    <AdditionalMenu />
    <Logo />
    <MenuLinks />
    <CreateButton />
    <Search />
    <WarningButton />
    <NotificationButton />
    <DropDownMenu />
  </div>
</template>

<script>
import AdditionalMenu from "../molecules/AdditionalMenu";
import Logo from "../atoms/Logo";
import MenuLinks from "../molecules/MenuLinks";
import CreateButton from "../atoms/CreateButton";
export default {
  components: {
    AdditionalMenu,
    Logo,
    MenuLinks,
    CreateButton,
  },
};
</script>

<style>
</style>