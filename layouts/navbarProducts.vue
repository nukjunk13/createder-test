<template>
<div>
<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-white">
  
  <!-- Logo text or image -->
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest " >
        <a class="no-underline text-black hover:text-green-400" href="/users">
            Home
        </a>
    </h1>
  </div>
  <!-- END Logo text or image -->
  
  <!-- Global navigation -->
  <nav>
    <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-black hover:text-green-400 md:border-none md:p-0" href="#">
          Cactus
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-black hover:text-green-400 md:border-none md:p-0" href="#">
          Indoor Trees
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-black hover:text-green-400 md:border-none md:p-0" href="#">
          Outdoor Trees
        </a>
      </li>
    </ul>
  </nav>
  
  <!-- END Global navigation -->

</header>
    <Nuxt/>
</div>
</template>
<script>
export default {
}
</script>