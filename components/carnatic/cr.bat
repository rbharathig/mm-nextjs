@echo off
REM Batch script to create empty .mjs files

(
echo Hero.mjs
echo HowItWorks.mjs
echo Advantages.mjs
echo CTASection.mjs
echo TutorCarousel.mjs
echo InstagramSection.mjs
echo PricingSection.mjs
echo HiringSection.mjs
echo ContentBlocks.mjs
echo Testimonials.mjs
echo FAQSection.mjs
echo StudentPortal.mjs
) > filelist.txt

for /f %%f in (filelist.txt) do (
    type nul > %%f
)

del filelist.txt
echo All files created successfully.