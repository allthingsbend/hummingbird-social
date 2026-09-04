export type SeoPrintablePage = {
  slug: string;
  cluster: 'pregnancy' | 'wedding' | 'planning';
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  productSlug?: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
};

export const seoPrintablePages: SeoPrintablePage[] = [
  {
    slug: 'pregnancy-planner-printable',
    cluster: 'pregnancy',
    eyebrow: 'Pregnancy printables',
    title: 'Printable Pregnancy Planner | Pregnancy Organizer Pages',
    description: 'Explore what to include in a printable pregnancy planner, from appointment notes and questions to trimester planning, baby prep and memory pages.',
    h1: 'A printable pregnancy planner for keeping the little details in one place.',
    intro: 'Pregnancy comes with appointments, questions, purchases, decisions and moments you may want to remember later. A printable pregnancy planner gives all of that information a home without requiring another app or complicated system.',
    productSlug: 'pregnancy-journal-planner',
    sections: [
      {
        heading: 'What a useful pregnancy planner should help you track',
        body: 'The best pregnancy planner is not just a stack of decorative pages. It should make everyday planning easier. Look for a layout that gives you enough structure to remember what matters while still leaving room for notes that are specific to your pregnancy.',
        bullets: ['Appointment dates and questions to ask', 'Trimester-by-trimester tasks', 'Baby gear and nursery notes', 'Hospital and birth preparation', 'Important contacts and provider information', 'Weekly memories, symptoms or milestones']
      },
      {
        heading: 'Printable works well when you want flexibility',
        body: 'A printable format lets you use only the pages that are helpful to you. You can keep them in a binder, add them to an existing notebook, print extra copies of frequently used worksheets, or save the PDF digitally for reference. That makes it especially useful for people who do not want to commit to a dated planner.',
      },
      {
        heading: 'Keep planning separate from medical guidance',
        body: 'A pregnancy organizer can help you write down questions, preferences and reminders, but it should not replace advice from your healthcare team. Use planning pages as a way to prepare for conversations and keep information organized.',
      }
    ],
    faqs: [
      { q: 'What pages should be in a pregnancy planner?', a: 'Common pages include appointment notes, questions for providers, trimester checklists, baby preparation lists, hospital planning, important contacts and memory pages.' },
      { q: 'Can I print a pregnancy planner more than once?', a: 'With a personal-use printable, you can typically reprint pages for your own use. Always follow the license included with the specific digital product.' },
      { q: 'Is a pregnancy planner medical advice?', a: 'No. A planner is an organizational tool and should not replace medical guidance from your own healthcare provider.' }
    ]
  },
  {
    slug: 'printable-birth-plan-template',
    cluster: 'pregnancy',
    eyebrow: 'Birth planning',
    title: 'Printable Birth Plan Template | Simple Birth Preferences Worksheet',
    description: 'Learn what to include in a simple printable birth plan template and how to organize labor, delivery, newborn and postpartum preferences clearly.',
    h1: 'A simple printable birth plan template that keeps preferences clear and easy to scan.',
    intro: 'A birth plan works best when it is concise, flexible and easy for you and your care team to review. A printable template can help organize your preferences before labor without turning the document into a rigid script.',
    productSlug: 'birth-plan',
    sections: [
      {
        heading: 'What to consider including on a birth plan',
        body: 'Every birth is different, so the goal is not to predict exactly what will happen. The goal is to think through common decisions ahead of time and write down the preferences that matter most to you.',
        bullets: ['Support people and communication preferences', 'Labor environment and movement preferences', 'Pain management preferences', 'Monitoring or intervention questions to discuss', 'Delivery and immediate newborn preferences', 'Feeding and early postpartum preferences']
      },
      {
        heading: 'Keep the final version short',
        body: 'A one- or two-page birth preferences sheet is often easier to use than a long document. Prioritize the items that matter most, use plain language and bring questions to your prenatal appointments before finalizing your plan.',
      },
      {
        heading: 'Treat the plan as a conversation starter',
        body: 'Birth can change quickly. A helpful plan creates a shared starting point while leaving room for medical needs and changing circumstances. Review your preferences with your provider and ask what is realistic for your birth setting.',
      }
    ],
    faqs: [
      { q: 'How long should a birth plan be?', a: 'Many people find one or two pages easiest to scan. The most important thing is that your highest-priority preferences are clear.' },
      { q: 'When should I make a birth plan?', a: 'You can start thinking about preferences during pregnancy and review a draft with your provider before your due date.' },
      { q: 'Does a birth plan guarantee what will happen?', a: 'No. Birth plans express preferences, but medical circumstances and personal needs can change during labor and delivery.' }
    ]
  },
  {
    slug: 'postpartum-journal-printable',
    cluster: 'pregnancy',
    eyebrow: 'Postpartum printables',
    title: 'Postpartum Journal Printable | New Mom Reflection & Recovery Pages',
    description: 'Explore a gentle postpartum journal printable for tracking memories, questions, recovery notes, support and the early weeks with a new baby.',
    h1: 'A postpartum journal printable for the weeks that can feel both full and blurry.',
    intro: 'The early postpartum period can move quickly even when the days feel long. A simple journal gives you a low-pressure place to capture memories, write down questions, note practical details and make space for how you are feeling.',
    productSlug: 'postpartum-journal',
    sections: [
      {
        heading: 'What can go in a postpartum journal',
        body: 'A useful postpartum journal does not need to ask you to write an essay every day. Short prompts and practical pages are often easier to keep up with when sleep and routines are unpredictable.',
        bullets: ['Weekly reflections and memorable moments', 'Questions for postpartum or pediatric appointments', 'Support contacts and help requests', 'Simple self-care reminders', 'Feeding or routine notes if useful to you', 'Things you want to remember about the newborn stage']
      },
      {
        heading: 'Choose prompts that feel supportive, not demanding',
        body: 'The point is not to create another task to complete. Use the pages when they help and skip them when they do not. A printable format makes that easy because you can choose the sections that fit your own postpartum experience.',
      },
      {
        heading: 'Use journaling alongside real support',
        body: 'Writing can help organize thoughts, but a journal is not a substitute for professional care. If you have physical or emotional concerns postpartum, contact your healthcare provider or another qualified professional.',
      }
    ],
    faqs: [
      { q: 'What should I write in a postpartum journal?', a: 'You can record memories, recovery notes, questions for appointments, support needs, routines and anything you want to remember from the early weeks.' },
      { q: 'Do I need to journal every day?', a: 'No. A low-pressure weekly or occasional format can be more realistic during postpartum life.' },
      { q: 'Is a postpartum journal a health tracker?', a: 'It can help you organize notes and questions, but it is not a medical or mental-health diagnostic tool.' }
    ]
  },
  {
    slug: 'baby-shower-planner-printable',
    cluster: 'pregnancy',
    eyebrow: 'Celebration planning',
    title: 'Baby Shower Planner Printable | Checklist, Guest List & Budget Pages',
    description: 'Plan a baby shower with printable checklist, guest list, budget, menu, game, decor and day-of organization ideas in one simple system.',
    h1: 'A baby shower planner printable for keeping the celebration organized without overcomplicating it.',
    intro: 'Baby showers have a lot of small moving pieces: invitations, guest counts, food, games, gifts, decor and timing. A printable planner can turn those pieces into a simple sequence so the host knows what needs attention next.',
    productSlug: 'baby-shower-planner',
    sections: [
      {
        heading: 'Core pages for planning a baby shower',
        body: 'A good shower planner should cover the practical work first. Decorative extras are nice, but the pages you return to most are usually the ones that help with deadlines, people and spending.',
        bullets: ['Master baby shower checklist', 'Guest list and RSVP tracker', 'Budget worksheet', 'Menu and drink planning', 'Decor and supply list', 'Games and activity notes', 'Gift tracking', 'Day-of timeline']
      },
      {
        heading: 'Start with the guest list and budget',
        body: 'Those two decisions affect almost everything else, including venue size, food quantities, invitation count and decor. Once they are set, you can make the rest of the plan more confidently.',
      },
      {
        heading: 'Use the printable as a shared planning tool',
        body: 'If multiple people are hosting, printed pages can be easy to divide or review together. Keep one master checklist and assign individual tasks so everyone knows what they own.',
      }
    ],
    faqs: [
      { q: 'What should a baby shower planner include?', a: 'Useful sections include a checklist, guest list, RSVP tracker, budget, menu, decor, games, gifts and a day-of timeline.' },
      { q: 'How early should I start planning a baby shower?', a: 'Timing varies, but starting several weeks ahead gives you more flexibility for venue, invitations and guest availability.' },
      { q: 'Can a printable baby shower planner be used by multiple hosts?', a: 'Yes. Printed checklists and worksheets are easy to share, copy and assign between co-hosts.' }
    ]
  },
  {
    slug: 'wedding-planning-checklist-printable',
    cluster: 'wedding',
    eyebrow: 'Wedding planning',
    title: 'Wedding Planning Checklist Printable | Simple Wedding To-Do List',
    description: 'Use a printable wedding planning checklist to organize vendors, attire, stationery, ceremony, reception and final-week tasks in one place.',
    h1: 'A wedding planning checklist printable that turns a very big project into smaller next steps.',
    intro: 'Wedding planning gets easier when you can see what is done, what is next and what can wait. A printable checklist creates a simple home base for the tasks that otherwise end up spread across notes, texts, emails and browser tabs.',
    productSlug: 'wedding-checklist',
    sections: [
      {
        heading: 'What a complete wedding checklist should cover',
        body: 'The exact order varies by wedding, but a useful checklist should move from the big early decisions into the smaller details that happen closer to the date.',
        bullets: ['Budget, priorities and guest count', 'Venue and major vendors', 'Attire and beauty appointments', 'Invitations and stationery', 'Ceremony and reception details', 'Transportation and accommodations', 'Final confirmations and payments', 'Wedding-week packing and day-of tasks']
      },
      {
        heading: 'Organize by timing instead of one giant list',
        body: 'Breaking tasks into planning windows makes a long checklist feel more manageable. You can focus on the items that need action now rather than scanning a hundred unrelated tasks every time you open the planner.',
      },
      {
        heading: 'Leave space for your own wedding',
        body: 'No checklist fits every celebration. Look for a printable with blank lines or flexible sections so you can add cultural traditions, travel plans, family responsibilities or venue-specific details.',
      }
    ],
    faqs: [
      { q: 'What should be on a wedding planning checklist?', a: 'A strong checklist covers budget, guest list, venue, vendors, attire, stationery, ceremony, reception, travel, final confirmations and wedding-week tasks.' },
      { q: 'Should a wedding checklist be organized by month?', a: 'It can be. Planning windows such as 9–12 months, 6 months and final month are often easier to use than one long undated list.' },
      { q: 'Can I use a printable checklist for a small wedding?', a: 'Yes. Simply skip the sections that do not apply and add details specific to your celebration.' }
    ]
  },
  {
    slug: 'wedding-budget-planner-printable',
    cluster: 'wedding',
    eyebrow: 'Wedding budget planning',
    title: 'Wedding Budget Planner Printable | Wedding Expense Worksheet',
    description: 'Plan wedding spending with a printable budget worksheet for estimated costs, actual costs, deposits, balances, due dates and vendor expenses.',
    h1: 'A wedding budget planner printable for knowing where the money is actually going.',
    intro: 'Wedding budgets get confusing when estimates, deposits, balances and final totals live in different places. A printable wedding budget planner can give you one clear view of what you planned to spend and what you are actually spending.',
    sections: [
      {
        heading: 'What to track in a wedding budget worksheet',
        body: 'A useful budget page should do more than list categories. Tracking both estimates and actual costs makes it easier to see where you have room and where costs are starting to move.',
        bullets: ['Estimated cost by category', 'Actual contracted cost', 'Deposits already paid', 'Remaining balances', 'Payment due dates', 'Tips, gratuities and service fees', 'Small purchases that are easy to forget']
      },
      {
        heading: 'Use broad categories first, then add detail',
        body: 'Start with venue, food, photo, attire, flowers, entertainment, rentals and stationery. Once your major costs are clear, add sub-items such as alterations, postage, signage, transportation, favors or last-minute supplies.',
      },
      {
        heading: 'Budget for the costs that happen near the end',
        body: 'Final weeks can include vendor balances, tips, beauty appointments, transportation, printing and small decor purchases. Leaving a buffer can make those expenses less stressful.',
      }
    ],
    faqs: [
      { q: 'What categories belong in a wedding budget planner?', a: 'Common categories include venue, catering, photography, entertainment, attire, flowers, rentals, stationery, transportation, beauty, gifts and miscellaneous expenses.' },
      { q: 'Should I track deposits separately?', a: 'Yes. Tracking deposits and remaining balances makes cash flow and payment deadlines much easier to understand.' },
      { q: 'Is a printable budget planner better than a spreadsheet?', a: 'It depends on how you like to plan. A printable is good for a simple visual overview; a spreadsheet is better if you want automatic calculations.' }
    ]
  },
  {
    slug: 'adhd-planner-printable',
    cluster: 'planning',
    eyebrow: 'Everyday planning',
    title: 'ADHD Planner Printable | Simple Daily & Weekly Planning Pages',
    description: 'Explore an ADHD-friendly printable planner with simple daily priorities, weekly planning, task breakdowns, brain-dump space and realistic routines.',
    h1: 'An ADHD planner printable designed to reduce friction, not create another system to maintain.',
    intro: 'A planner is only useful if it is easy enough to return to. For people with ADHD, overly detailed systems can become one more thing to manage. A simpler printable format can make it easier to focus on priorities, break down tasks and reset when a week does not go as planned.',
    productSlug: 'adhd-planner',
    sections: [
      {
        heading: 'Useful ADHD-friendly planning pages',
        body: 'Different systems work for different people, but many helpful layouts reduce the amount of information competing for attention at one time.',
        bullets: ['Top-three priority space', 'Short daily task list', 'Weekly overview', 'Brain-dump page', 'Task breakdown worksheet', 'Routine or habit prompts', 'Notes for appointments and follow-ups']
      },
      {
        heading: 'Choose a planner that is easy to restart',
        body: 'Undated printable pages can be useful because missing a day or week does not leave a book full of blank dated pages. Print a fresh sheet, reset and continue without feeling behind.',
      },
      {
        heading: 'Planning tools are personal',
        body: 'An ADHD planner can support organization, but it is not a treatment or medical tool. Use the pages that help you and adapt the structure to fit your routines, work and support needs.',
      }
    ],
    faqs: [
      { q: 'What makes a planner ADHD friendly?', a: 'Many people prefer clear priorities, limited visual clutter, task-breakdown space, flexible undated pages and room for quick brain dumps.' },
      { q: 'Are printable ADHD planners dated?', a: 'Some are, but undated versions can be easier to restart because you can print a new page whenever you need one.' },
      { q: 'Is an ADHD planner a treatment tool?', a: 'No. A planner is an organizational aid and should not be treated as medical or mental-health care.' }
    ]
  },
  {
    slug: 'first-time-home-buyer-budget-worksheet',
    cluster: 'planning',
    eyebrow: 'Home buying printables',
    title: 'First-Time Home Buyer Budget Worksheet | Printable Cost Tracker',
    description: 'Organize down payment, closing costs, inspections, moving expenses, repairs and monthly housing costs with a first-time home buyer budget worksheet.',
    h1: 'A first-time home buyer budget worksheet for the costs beyond the listing price.',
    intro: 'Buying a first home involves more than the down payment and mortgage. Inspections, closing costs, moving, immediate repairs and new monthly expenses can all arrive close together. A simple budget worksheet helps you see the full picture before those costs stack up.',
    productSlug: 'first-time-home-buyer-budget-tracker',
    sections: [
      {
        heading: 'Costs worth putting on one page',
        body: 'The exact numbers vary by location, loan and property, but organizing categories early can help you ask better questions and avoid forgetting one-time expenses.',
        bullets: ['Down payment', 'Estimated closing costs', 'Inspection and appraisal costs', 'Moving expenses', 'Immediate repairs or maintenance', 'Furniture and household setup', 'Monthly mortgage, taxes and insurance', 'HOA or recurring property costs']
      },
      {
        heading: 'Separate cash-to-close from move-in costs',
        body: 'Those are related but different buckets. Keeping them separate makes it easier to see how much cash is needed for the transaction itself and how much you may want available after closing.',
      },
      {
        heading: 'Use estimates as planning numbers, not guarantees',
        body: 'A printable worksheet can help with organization, but final figures should come from your lender, escrow or closing professionals. Update the worksheet as real quotes and disclosures become available.',
      }
    ],
    faqs: [
      { q: 'What should a first-time home buyer budget include?', a: 'Include down payment, closing costs, inspections, appraisal, moving, immediate repairs, setup purchases and expected monthly housing expenses.' },
      { q: 'Are closing costs the same as the down payment?', a: 'No. They are separate categories, though both can affect the amount of cash needed to complete a purchase.' },
      { q: 'Is a home buyer worksheet financial advice?', a: 'No. It is an organizational tool. Use lender and closing documents for actual figures and professional advice.' }
    ]
  },
  {
    slug: 'editable-save-the-date-templates',
    cluster: 'wedding',
    eyebrow: 'Wedding stationery',
    title: 'Editable Save the Date Templates | Canva Wedding Save the Dates',
    description: 'Browse ideas for editable save the date templates in Canva, including destination, venue illustration, desert and vineyard wedding designs.',
    h1: 'Editable save the date templates that feel personal without starting from scratch.',
    intro: 'A save the date is often the first piece of the wedding your guests see. An editable template lets you start with a finished design, then personalize names, date, location and wording without waiting on a full custom-design process.',
    productSlug: 'palm-springs-save-the-date',
    sections: [
      {
        heading: 'What to include on a save the date',
        body: 'Save the dates are intentionally simple. Most couples need only enough information for guests to reserve the date and understand where the celebration will be.',
        bullets: ['Couple names', 'Wedding date', 'City or destination', 'Wedding website if ready', 'A note that the formal invitation will follow']
      },
      {
        heading: 'Venue illustrations make templates feel more custom',
        body: 'Hand-drawn architecture, landscapes or destination details can make a digital template feel specific to the celebration. Hummingbird Social designs lean into that illustrated look for Palm Springs, Napa Valley and other destination-inspired weddings.',
      },
      {
        heading: 'Canva keeps simple edits approachable',
        body: 'Editable Canva templates are useful when you want control over wording and details but do not want to design the layout yourself. Once edits are complete, download the finished file for printing or digital sharing according to the product instructions.',
      }
    ],
    faqs: [
      { q: 'What information goes on a save the date?', a: 'Typically names, wedding date, location and optionally a wedding website, along with a note that the formal invitation will follow.' },
      { q: 'Can I edit a save the date template in Canva?', a: 'If the product is sold as an editable Canva template, you can personalize the fields and design elements allowed by that template.' },
      { q: 'When should save the dates be sent?', a: 'Timing varies by wedding and travel needs. Destination weddings often benefit from more advance notice than local celebrations.' }
    ]
  },
  {
    slug: 'hand-drawn-wedding-invitation-templates',
    cluster: 'wedding',
    eyebrow: 'Illustrated wedding stationery',
    title: 'Hand-Drawn Wedding Invitation Templates | Venue Illustration Invites',
    description: 'Explore hand-drawn wedding invitation templates with venue illustrations, destination sketches and editable details for a personal stationery look.',
    h1: 'Hand-drawn wedding invitation templates with the personality of custom stationery.',
    intro: 'Illustrated wedding invitations sit in a nice middle ground: they feel more personal than a generic template, but an editable design can still be faster and more approachable than commissioning an entirely custom suite.',
    productSlug: 'hand-sketched-wedding-invitation',
    sections: [
      {
        heading: 'Why venue illustrations work so well on invitations',
        body: 'A sketch of the venue or destination gives the invitation an immediate sense of place. It can be especially effective for distinctive architecture, desert weddings, vineyard celebrations, mountain venues and locations guests will remember.',
        bullets: ['Venue sketches', 'Destination landmarks', 'Landscape illustrations', 'Botanical accents', 'Minimal line art', 'Coordinated save the date artwork']
      },
      {
        heading: 'Pair illustration with simple typography',
        body: 'Detailed artwork usually looks best when the surrounding layout stays calm. Clean type, generous spacing and a restrained color palette help the illustration remain the focal point without making the invitation difficult to read.',
      },
      {
        heading: 'Editable templates make the practical details easier',
        body: 'The artwork creates the personality while editable text fields handle names, dates, locations and wording. That gives couples a polished starting point while still allowing the important event details to be personalized.',
      }
    ],
    faqs: [
      { q: 'What is a hand-drawn wedding invitation?', a: 'It is an invitation design that uses illustrated elements such as a venue, landscape, botanical detail or destination sketch as part of the stationery artwork.' },
      { q: 'Can venue illustration invitations still be editable?', a: 'Yes. Many designs keep the illustration fixed while allowing names, dates, wording and other text to be personalized.' },
      { q: 'What wedding styles work with illustrated invitations?', a: 'They can work for destination, vineyard, desert, mountain, garden, estate and many other weddings where the setting is part of the story.' }
    ]
  }
];

export const seoPrintablePageMap = new Map(seoPrintablePages.map((page) => [page.slug, page]));
