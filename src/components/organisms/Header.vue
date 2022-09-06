<template>
  <div :class="$style.wrapper">
    <div :class="$style.left">
      <AdditionalMenu />
      <Logo />
      <MenuLinks />
      <CreateButton />
    </div>
    <div :class="$style.right">
      <Search />
      <WarningButton />
      <NotificationButton />
      <DropDownMenu />
    </div>
  </div>
</template>

<script>
import AdditionalMenu from "@/components/molecules/AdditionalMenu";
import Logo from "@/components/atoms/Logo";
import MenuLinks from "@/components/molecules/MenuLinks";
import CreateButton from "@/components/atoms/CreateButton";
import Search from "@/components/atoms/Search";
import WarningButton from "@/components/atoms/WarningButton";
import NotificationButton from "@/components/atoms/NotificationButton";
import DropDownMenu from "@/components/molecules/DropDownMenu";
export default {
  components: {
    AdditionalMenu,
    Logo,
    MenuLinks,
    CreateButton,
    Search,
    WarningButton,
    NotificationButton,
    DropDownMenu,
  },
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.25rem;
  max-height: 3rem;
  max-width: 100%;
  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>