<template lang="html">
  <aside class="menu" style="padding:10px 0 0 15px;">

  <ul class="menu-list">
    <li><router-link to="/">Dashboard</a></li>
    <li><router-link to="/customers">Customers</router-link></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a href="#">Team Settings</a></li>
    <li>
      <a class="is-active" href="#">Manage Your Team</a>
      <ul>
        <li><a href="#">Members</a></li>
        <li><a href="#">Plugins</a></li>
        <li><a href="#">Add a member</a></li>
      </ul>
    </li>
    <li><a href="#">Invitations</a></li>
    <li><a href="#">Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a href="#">Payments</a></li>
    <li><a href="#">Transfers</a></li>
    <li><a href="#">Balance</a></li>
  </ul>
</aside>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" >
</style>
