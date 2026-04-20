<span class="dots space-x-1">
  <span class="dot inline-flex rounded-full">&bull;</span>
  <span class="dot inline-flex rounded-full">&bull;</span>
  <span class="dot inline-flex rounded-full">&bull;</span>
</span>

<style>
  .dot {
    animation: bounce 1s ease-in infinite alternate;
    opacity: 0;
  }
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes bounce {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(15%);
      opacity: 1;
    }
  }
</style>
