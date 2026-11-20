// Read-only browser regression check. Execute the exported function in the page
// using browser automation against the production preview after fonts load.
// Check 375, 430, 768, 1024, 1280, 1440, 1920 and 2560px viewports.
export default async function verifyEditorialSummaryLayout() {
  await document.fonts.ready
  const failures = []
  const measurements = []

  for (const section of document.querySelectorAll('.editorial-summary')) {
    const heading = section.querySelector('.editorial-summary__heading')
    const title = heading.querySelector('h2')
    const body = section.querySelector('.editorial-summary__body')
    const headingRect = heading.getBoundingClientRect()
    const bodyRect = body.getBoundingClientRect()
    const titleRange = document.createRange()
    titleRange.selectNodeContents(title)
    const textRects = [...titleRange.getClientRects()].filter((rect) => rect.width > 0)
    const textRight = Math.max(...textRects.map((rect) => rect.right))
    const textLeft = Math.min(...textRects.map((rect) => rect.left))

    if (textRight > headingRect.right + 1 || textLeft < headingRect.left - 1) {
      failures.push(`${section.id}: title escapes its heading column`)
    }

    for (const rect of textRects) {
      if (rect.right > bodyRect.left + 1 && rect.left < bodyRect.right - 1
          && rect.bottom > bodyRect.top + 1 && rect.top < bodyRect.bottom - 1) {
        failures.push(`${section.id}: title overlaps the description column`)
      }
    }

    measurements.push({
      section: section.id,
      headingWidth: Math.round(headingRect.width),
      textWidth: Math.round(textRight - textLeft),
      fontSize: getComputedStyle(title).fontSize,
    })
  }

  if (document.documentElement.scrollWidth > innerWidth) {
    failures.push('page has horizontal overflow')
  }
  if (measurements.length !== 2) failures.push('expected both editorial summary sections')
  if (failures.length) throw new Error(JSON.stringify({ width: innerWidth, failures, measurements }))
  return { width: innerWidth, passed: true, measurements }
}
