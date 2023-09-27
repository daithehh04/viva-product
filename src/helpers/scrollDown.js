export default function scrollDown(ref, block) {
  ref?.current?.scrollIntoView({
    behavior: 'smooth',
    block: block || 'center',
    inline: 'nearest'
  })
}
