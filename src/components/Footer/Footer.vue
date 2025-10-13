<template>
  <footer class="bg-gray-500 rounded-tl-xl rounded-tr-xl text-[#FFFFFF] p-9">
    <div class="max-w-6xl mx-auto flex flex-col">
      <div class="footer_res flex max-w-4xl flex-col md:flex-row justify-between items-center md:items-start">
        
        <div class="mb-6 mt-3 md:mb-0 text-center md:text-left">
          <!-- <img class="w-[90px] mx-auto md:mx-0" :src="assets.footerImg" alt="Logo" /> -->
          <div class="mt-6  flex md:gap-7 gap-8 justify-center md:justify-start">
            <img :src="assets.facebook" alt="Facebook" />
            <img :src="assets.twitter" alt="Twitter" />
            <img :src="assets.linkedin" alt="LinkedIn" />
            <img :src="assets.youtubeImg" alt="YouTube" />
          </div>
        </div>

        
        <div class="flex md:min-w-[60%] flex-col md:flex-row justify-between">
        
          <div class="mb-6 mt-4 md:mt-0 md:mb-0 text-center md:text-left">
            <h2 class="text-lg font-semibold mb-3">Contacts</h2>
            <p class="mb-1">N/2</p>
            <p class="mb-1">-1 (588) 567.89 S4</p>
            <p class="mb-1">-800-350 86.31</p>
          </div>

        
          <div class="text-center md:text-left">
            <h2 class="text-lg font-semibold mb-3">Company</h2>
            <ul class="space-y-1">
              <li><a href="#" class="hover:text-gray-400">About</a></li>
              <li><a href="#" class="hover:text-gray-400">Solutions</a></li>
              <li><a href="#" class="hover:text-gray-400">Industries</a></li>
              <li><a href="#" class="hover:text-gray-400">Pricing</a></li>
              <li><a href="#" class="hover:text-gray-400">Blogs</a></li>
              <li><a href="#" class="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>

     
      <div class="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="mb-3 md:mb-0 text-center md:text-left">
          Asset Management System 2025, All rights reserved.
        </p>
        <div class="flex justify-center md:justify-start">
          <a href="#" class="hover:text-gray-400 px-4">Terms of use</a>
          <a href="#" class="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import { assets } from '@/assets/assets';

export default {
  name: "FooterScreen",
  data() {
    return {
      assets
    };
  }
};
</script>
