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
import AdditionalMenu from "@/components/molecules/AdditionalMenu";
import Logo from "@/components/atoms/Logo";
import MenuLinks from "@/components/molecules/MenuLinks";
import CreateButton from "@/components/atoms/CreateButton";
export default {
  components: {
    AdditionalMenu,
    Logo,
    MenuLinks,
    CreateButton,
  },
};
</script>

<style lang="scss" module>
.wrapper{
display: flex;
}
</style>