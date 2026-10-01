export type SupportGuide = {
  slug: string;
  category: 'moving' | 'travel' | 'hosting' | 'holiday' | 'wedding' | 'family' | 'creator';
  title: string;
  description: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  relatedDownload: string;
  relatedLabel: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  checklist: string[];
  mistakes: string[];
  relatedGuides?: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const supportGuides: SupportGuide[] = [
  {
    "slug": "moving-checklist-8-weeks",
    "relatedGuides": [{"href": "/guides/how-to-label-moving-boxes/", "label": "How to label moving boxes"}, {"href": "/guides/first-night-box-moving-checklist/", "label": "What to put in a first-night box"}],
    "category": "moving",
    "title": "8-Week Moving Checklist | Week-by-Week Packing Timeline",
    "description": "Use this eight-week moving checklist to plan packing, utilities, address changes and moving day, with a two-week catch-up plan and essentials list.",
    "h1": "8-week moving checklist: a week-by-week plan for a calmer move.",
    "intro": "Use moving day as your anchor, then work backward. This checklist separates bookings, packing and household admin so you can see what needs a decision now and what can wait. If you have less than eight weeks, start with the catch-up plan below.",
    "quickAnswer": "Confirm your date and transport first. Declutter before packing, schedule service transfers before the final week, and keep documents, medication and first-night supplies with you.",
    "relatedDownload": "moving-planner-printable",
    "relatedLabel": "Moving Planner Printable",
    "sections": [
        {
            "heading": "Week 8: confirm the date and the moving method",
            "body": "Write down the dates you can access the new home and must leave the old one. Choose movers, a rental truck or a self-move based on the actual load and available help. For an uncertain closing date, ask providers how changes affect your reservation before booking.",
            "bullets": [
                "Create one folder for estimates, contact numbers and confirmations",
                "Get written moving estimates and compare what is included",
                "Check stairs, lifts, parking and loading access at both homes",
                "Measure doorways and large furniture",
                "Set a budget for transport, supplies, cleaning and overlapping services"
            ]
        },
        {
            "heading": "Week 7: sort before you buy boxes",
            "body": "Work through one room at a time and make keep, donate, sell and disposal piles. Start with closets, storage areas and duplicate kitchenware. A smaller load means fewer boxes to carry and unpack.",
            "bullets": [
                "Schedule collection or drop-off for donations",
                "List larger items early so collection is not left to moving day",
                "Ask the mover which items they cannot transport",
                "Use up food you would rather not move"
            ]
        },
        {
            "heading": "Week 6: make a simple inventory",
            "body": "List large furniture and give boxes a destination room before packing. Photograph electronics and furniture condition where useful. Keep the inventory in your moving folder rather than creating separate lists nobody can reconcile.",
            "bullets": [
                "Gather boxes, tape, labels, padding and a marker",
                "Use small boxes for books and other heavy items",
                "Create a room-name key that matches the new home",
                "Keep valuables and sensitive documents separate"
            ]
        },
        {
            "heading": "Week 5: pack the things you will not miss",
            "body": "Begin with seasonal decor, spare linens, books and guest-room items. Label room, contents and unpacking priority on the top and at least one side. Leave a small set of everyday supplies in use.",
            "bullets": [
                "Bag and label furniture hardware; note which piece it belongs to",
                "Photograph cable connections before dismantling them",
                "Mark fragile boxes clearly and pack them securely",
                "Keep a separate box of items to return or donate"
            ]
        },
        {
            "heading": "Week 4: schedule transfers and practical help",
            "body": "Contact utility and internet providers to arrange dates that suit your actual move. Confirm appointments, equipment-return requirements and any access the installer needs. Put the answers in one place.",
            "bullets": [
                "Schedule electricity, gas and water service as applicable",
                "Confirm internet activation and router return instructions",
                "Arrange childcare or pet care for the busiest moving hours",
                "Confirm building or parking arrangements",
                "Reserve time for cleaning the old home"
            ]
        },
        {
            "heading": "Week 3: update addresses and pack a little each day",
            "body": "Make an address-change list before sending updates. Include mail forwarding, employer, banks, insurance, subscriptions and delivery accounts. Use the appropriate provider process and effective date rather than assuming one change updates every account.",
            "bullets": [
                "Update shopping defaults before placing orders for the new home",
                "Record old-service end dates and new-service start dates",
                "Pack decorative items and extra kitchenware",
                "Keep important correspondence and confirmations accessible"
            ]
        },
        {
            "heading": "Week 2: confirm people, times and access",
            "body": "Reconfirm your transport, helpers and access arrangements. Decide where essentials will travel and who is responsible for keys. Give helpers the destination room names so boxes land in the right places.",
            "bullets": [
                "Confirm arrival windows and contact numbers",
                "Plan bed assembly and the first meal",
                "Arrange lawful disposal of items your mover will not take",
                "Keep one cleaning kit unpacked"
            ]
        },
        {
            "heading": "Final week and moving day",
            "body": "Finish ordinary packing before moving day where possible. Carry essentials yourself and do a last walk-through of cupboards, drawers, sheds and storage areas. At the new home, prioritize beds, bathroom basics and a clear walking route.",
            "bullets": [
                "Pack an overnight bag for each person",
                "Carry keys, ID, documents, medication, chargers and valuables",
                "Record meter readings or condition photos where useful",
                "Check that every room is empty before leaving",
                "Confirm doors and windows are secured and follow the agreed key handover"
            ]
        },
        {
            "heading": "Only two weeks left? Use this catch-up order",
            "body": "Focus on tasks that depend on other people first, then pack around your daily needs. Skip elaborate inventories if a room-and-priority label will do the job.",
            "bullets": [
                "Today: confirm transport, access dates and utility appointments",
                "Next two days: sort obvious donations and gather supplies",
                "Days 3–9: pack low-use items, then room by room",
                "Days 10–12: confirm logistics, address changes and cleaning",
                "Final two days: pack essentials separately and finish only the daily-use items"
            ]
        }
    ],
    "checklist": [
        "Move and access dates confirmed",
        "Transport reserved",
        "Service start and end dates recorded",
        "Address-change list completed",
        "Boxes labeled for new rooms",
        "First-night box separated",
        "Personal overnight bags ready",
        "Cleaning and key handover arranged"
    ],
    "mistakes": [
        "Booking around an unconfirmed access date without checking change terms",
        "Packing essentials into the main load",
        "Stopping services before you finish cleaning",
        "Leaving donation disposal until moving day",
        "Labeling boxes only with the old room name"
    ],
    "faqs": [
        {
            "q": "When should I start packing for a move?",
            "a": "Start with low-use items several weeks ahead if you have the time. Keep everyday essentials available, then pack them in the final days. The order matters more than a rigid date."
        },
        {
            "q": "What if I only have two weeks to move?",
            "a": "Confirm transport, access and service appointments immediately. Gather supplies, remove obvious clutter and pack low-use items first. Use the two-week catch-up sequence above."
        },
        {
            "q": "What should go in a first-night moving box?",
            "a": "Bedding, towels, toilet paper, soap, basic cleaning supplies, a few utensils, scissors and simple breakfast items. Keep each person’s medication, documents and overnight bag with them."
        },
        {
            "q": "When should utilities be transferred?",
            "a": "Schedule transfers in advance, using the dates you have access to each home. Confirm provider requirements and allow for any period when both homes need service."
        }
    ]
},
  {
    "slug": "how-to-label-moving-boxes",
    "relatedGuides": [{"href": "/guides/moving-checklist-8-weeks/", "label": "The eight-week moving checklist"}, {"href": "/guides/first-night-box-moving-checklist/", "label": "Your first-night essentials box"}],
    "category": "moving",
    "title": "How to Label Moving Boxes | Examples & Room Priority System",
    "description": "Label moving boxes with destination room, contents and unpacking priority. Includes sample labels, a room-color key and a simple numbered inventory.",
    "h1": "How to label moving boxes: a simple room, contents and priority system.",
    "intro": "A good label lets someone route a box without asking you a question. Use the same room names throughout the move, add a short contents summary and make the first-night boxes easy to spot.",
    "quickAnswer": "Write destination room, short contents and priority on the top and at least one side. Add a box number only when you also have a matching inventory.",
    "relatedDownload": "moving-planner-printable",
    "relatedLabel": "Moving Planner Printable",
    "sections": [
        {
            "heading": "Write a three-part label",
            "body": "Use large, readable letters and the room in the new home. Add enough detail to avoid opening five boxes to find one item.",
            "bullets": [
                "KITCHEN | everyday plates + bowls | NORMAL",
                "MAIN BEDROOM | sheets + pillows | OPEN FIRST",
                "BATHROOM | towels + soap | OPEN FIRST",
                "STORAGE | winter decorations | STORAGE"
            ]
        },
        {
            "heading": "Put the label where it survives stacking",
            "body": "Label the top and at least one side before a box joins the pile. Two adjacent sides help when boxes may face different directions. Keep the label away from seams and handles that will be covered or damaged.",
            "bullets": [
                "Write on a flat area with a dark marker",
                "Repeat the destination room on the side",
                "Use the same label wording in every place",
                "Remove or cover old room names on reused boxes"
            ]
        },
        {
            "heading": "Use three priorities, not ten",
            "body": "OPEN FIRST means useful in the first day. NORMAL means unpack after essentials. STORAGE means it can stay boxed until daily living is working. Marking everything urgent defeats the purpose.",
            "bullets": [
                "OPEN FIRST: bedding, towels and basic kitchen supplies",
                "NORMAL: everyday clothing, cookware and books",
                "STORAGE: seasonal decor and archived household items"
            ]
        },
        {
            "heading": "Use colors as a backup to written room names",
            "body": "A color key helps helpers scan a stack, but the text still does the work. Make one key and post it near the entrance of the new home. Use room names everyone can recognize.",
            "bullets": [
                "Blue = Kitchen",
                "Green = Main bedroom",
                "Orange = Living room",
                "Purple = Bathroom",
                "Write the room name too; do not rely on color alone"
            ]
        },
        {
            "heading": "Add numbers when you need an inventory",
            "body": "For storage or a larger move, assign a unique number and record its room and contents in one note. Do not number a box without updating the log. Keep sensitive details out of the exterior label.",
            "bullets": [
                "K-01 | Kitchen | mugs and coffee gear | OPEN FIRST",
                "K-02 | Kitchen | serving platters | NORMAL",
                "B-01 | Main bedroom | spare blankets | NORMAL",
                "Check boxes against the list at loading and unloading"
            ]
        },
        {
            "heading": "Mark handling instructions separately",
            "body": "FRAGILE, THIS SIDE UP and HEAVY should stand out from the room label. These notes help handlers but do not replace appropriate padding or manageable box weights. Put heavier items in smaller boxes and avoid overfilling.",
            "bullets": [
                "Place fragile notes where they are visible when stacked",
                "Use arrows on the sides for orientation",
                "Keep valuables and private documents with you",
                "Bag furniture hardware and label the matching furniture name"
            ]
        },
        {
            "heading": "Give helpers a one-minute briefing",
            "body": "Tell everyone to route boxes by the written destination room and keep OPEN FIRST boxes accessible. Put room signs on doors if the layout is unfamiliar. Choose one person to answer questions so instructions stay consistent."
        }
    ],
    "checklist": [
        "Destination room in large letters",
        "Short contents summary",
        "OPEN FIRST, NORMAL or STORAGE",
        "Top and side labels",
        "Old labels removed",
        "Handling notes where needed",
        "Color key posted if used",
        "Inventory updated if numbered"
    ],
    "mistakes": [
        "Using “miscellaneous” as the only description",
        "Using colors with no written room name",
        "Reusing boxes with conflicting labels",
        "Writing private details on the exterior",
        "Numbering boxes without recording their contents"
    ],
    "faqs": [
        {
            "q": "Should I label the top or side of moving boxes?",
            "a": "Label both. A top label helps during packing; a side label remains visible when boxes are stacked."
        },
        {
            "q": "What does OPEN FIRST mean?",
            "a": "Reserve it for supplies you expect to need in the first 24 hours, such as bedding, towels and basic kitchenware. Personal essentials should travel with you."
        },
        {
            "q": "Do I need to number every moving box?",
            "a": "No. Room, contents and priority usually suffice for a simple local move. Numbers help when you need a storage or moving inventory."
        },
        {
            "q": "How should I label boxes for storage?",
            "a": "Use a short contents summary, a unique box number if you have an inventory, and the intended room. Put the inventory somewhere you can access without entering the storage unit."
        }
    ]
},
  {
    slug: 'group-trip-budget-split',
    category: 'travel',
    title: 'How to Split Group Trip Costs | Simple Shared Expense Method',
    description: 'A practical method for splitting group trip expenses, deciding what is shared, tracking who paid and settling costs without turning the trip into accounting.',
    h1: 'How to split group trip costs without making every dinner a math problem.',
    intro: 'Group travel gets awkward when nobody agrees on what is shared, one person fronts large reservations and small purchases get mixed together. The fix is less about perfect math and more about deciding the rules before money starts moving.',
    quickAnswer: 'Separate expenses into shared-fixed, shared-variable and individual. Assign one person to record shared costs, note who paid, then settle once or twice rather than sending reimbursements after every purchase.',
    relatedDownload: 'group-trip-planner-printable',
    relatedLabel: 'Group Trip Planner Printable',
    sections: [
      { heading: 'Decide what counts as shared before the trip', body: 'Lodging and a rental car are usually easy. Groceries, alcohol, parking, ride shares and restaurant bills are where expectations diverge. Agree on the categories that will be pooled before anyone starts paying.', bullets: ['Shared fixed: lodging, rental car, house fees', 'Shared variable: groceries, gas, parking, rides', 'Individual: flights, personal shopping, optional activities'] },
      { heading: 'Use one running expense log', body: 'For every shared expense, record the date, item, total, payer and who should be included in the split. That is enough information to reconcile later without saving every receipt.' },
      { heading: 'Do not force equal splits when participation is not equal', body: 'If two people skip an expensive excursion or one traveler arrives a day late, exclude them from that specific cost. Equal splitting is simple only when the benefit is actually shared equally.' },
      { heading: 'Settle in batches', body: 'One mid-trip settlement and one final settlement is usually easier than constant payment requests. The goal is to keep balances from becoming huge while leaving the trip feeling like a trip.' }
    ],
    checklist: ['Agree on shared categories', 'Choose the expense recorder', 'Record who paid', 'Record who participated', 'Keep a running total', 'Settle once mid-trip if needed', 'Do a final reconciliation before everyone forgets'],
    mistakes: ['Splitting optional activities across everyone', 'Assuming groceries and alcohol are automatically shared', 'Waiting weeks after the trip to reconcile', 'Tracking tiny personal purchases that were never meant to be shared', 'Having multiple unofficial versions of the expense list'],
    faqs: [
      { q: 'What is the easiest way to split group vacation costs?', a: 'Agree on shared categories, use one shared expense log and settle in batches instead of reimbursing every transaction.' },
      { q: 'Should group trip costs always be split equally?', a: 'No. Equal splits work for costs everyone uses equally; optional activities and partial participation should be split only among participants.' },
      { q: 'Who should pay for the Airbnb on a group trip?', a: 'One person can book and pay, but the group should agree on each traveler’s share and reimbursement timing before the reservation is made.' }
    ]
  },
  {
    "slug": "group-trip-itinerary-planning",
    "relatedGuides": [{"href": "/guides/group-trip-packing-list/", "label": "Personal and shared packing checklist"}, {"href": "/guides/group-trip-budget-split/", "label": "How to split shared trip expenses"}],
    "category": "travel",
    "title": "Group Trip Itinerary Planning | Sample Weekend & Template",
    "description": "Plan a group trip itinerary with a sample three-day weekend, realistic travel buffers, optional activities and a copyable reservation template.",
    "h1": "How to plan a group trip itinerary, with a sample weekend schedule.",
    "intro": "The best shared itinerary makes the fixed details easy to find and leaves room for people to do different things. Start with arrival, accommodation and reservations, then add optional ideas around them.",
    "quickAnswer": "Choose one or two fixed plans each day, include departure and meeting details, and clearly label everything else optional. Share one current itinerary with the whole group.",
    "relatedDownload": "group-trip-planner-printable",
    "relatedLabel": "Group Trip Planner Printable",
    "sections": [
        {
            "heading": "Ask five questions before booking activities",
            "body": "Collect the answers in one shared note. Planning around assumptions creates more rework than spending a few minutes on everyone’s practical limits.",
            "bullets": [
                "When does each person arrive and leave?",
                "What is the agreed activity budget?",
                "What are the must-do plans and definite no-thanks?",
                "Does anyone need step-free routes, shorter walks or extra rest time?",
                "Does the group want most meals together or only a few?"
            ]
        },
        {
            "heading": "Put the fixed commitments in first",
            "body": "Add arrival and departure details, accommodation check-in, ticketed events and reservations. Give each commitment an owner who can update the group if it changes. Avoid placing plans before everyone can reasonably arrive.",
            "bullets": [
                "Arrival window and transport to accommodation",
                "Check-in and luggage-storage arrangements",
                "Reservation time, address and booking name",
                "Departure time and airport or station plans"
            ]
        },
        {
            "heading": "Write departure times, not just reservation times",
            "body": "Work backward from the time you need to be there. Include the actual journey, parking or walking, check-in and a buffer suitable for the plan. Treat this as a planning estimate, then check routes closer to travel.",
            "bullets": [
                "Example: 2 p.m. tour start",
                "Allow 25 minutes for the journey",
                "Allow 15 minutes for parking and walking",
                "Allow 10 minutes for checking in",
                "Leave by 1:10 p.m.; adjust if the venue gives different instructions"
            ]
        },
        {
            "heading": "Example: a three-day friends weekend",
            "body": "This is a flexible structure rather than a destination-specific schedule. Replace the placeholders with confirmed times and keep travel days lighter.",
            "bullets": [
                "Friday afternoon: staggered arrivals and check-in",
                "Friday evening: one welcome dinner; optional drinks afterward",
                "Saturday morning: one booked activity with a clear departure time",
                "Saturday midday: lunch and free time in smaller groups",
                "Saturday late afternoon: return to lodging and reset",
                "Saturday evening: dinner reservation; optional late-night plan",
                "Sunday morning: easy breakfast and packing",
                "Sunday midday: check-out and individual departures"
            ]
        },
        {
            "heading": "Copy this format for each booked plan",
            "body": "Keep the same fields so a traveler can find the address or booking name quickly. Use a shared note or document with offline access where available. Keep private booking codes out of publicly shared versions.",
            "bullets": [
                "Plan: [activity or meal]",
                "Status: [confirmed / optional / awaiting booking]",
                "Date and time: [date, start time and expected finish]",
                "Leave by: [time] | Meet at: [location]",
                "Address: [full address] | Booking name: [name]",
                "Participants: [who is going] | Owner: [person managing it]",
                "Cost notes: [included / paid separately / still to confirm]"
            ]
        },
        {
            "heading": "Give optional plans a real opt-out",
            "body": "Label flexible blocks clearly and choose a meeting point for the next shared plan. People should be able to skip an activity without losing access to the rest of the itinerary. Leave space for meals, slower mornings and unexpected delays."
        },
        {
            "heading": "Prepare one fallback and one update channel",
            "body": "For a weather-dependent activity, record an alternative that does not require a last-minute scramble. Choose who will update the shared document and use the group chat to announce changes rather than keeping a second unofficial schedule."
        }
    ],
    "checklist": [
        "Arrival windows collected",
        "Check-in and check-out confirmed",
        "Fixed bookings labeled",
        "Departure and meeting times included",
        "Addresses and booking names recorded",
        "Optional blocks clearly marked",
        "Plan owner assigned",
        "Fallback and update channel chosen"
    ],
    "mistakes": [
        "Scheduling before late arrivals can join",
        "Treating an optional plan as a group obligation",
        "Forgetting transit and check-in time",
        "Keeping the only copy in one person’s inbox",
        "Copying booking codes into public documents"
    ],
    "faqs": [
        {
            "q": "How many activities should I plan per day?",
            "a": "One or two fixed plans is a useful starting point for a relaxed group trip. Add travel and meal time before deciding whether there is room for more."
        },
        {
            "q": "What should a group itinerary include?",
            "a": "Arrival and departure windows, accommodation details, confirmed reservations, departure times, meeting points, addresses, booking names and optional blocks."
        },
        {
            "q": "How do I handle different interests in a group trip?",
            "a": "Agree on a few shared anchors and keep other blocks optional. Include a clear next meeting point so smaller groups can reconnect."
        },
        {
            "q": "Who should update the itinerary?",
            "a": "Choose one editor or a clearly agreed editing process. Each booking should have an owner who reports changes to that person."
        }
    ]
},
  {
    slug: 'dinner-party-timeline',
    category: 'hosting',
    title: 'Dinner Party Timeline | 48 Hours to Guests Arriving',
    description: 'A practical dinner party timeline covering what to prep 48 hours before, the day before, the morning of and in the final hour before guests arrive.',
    h1: 'Dinner party timeline: what to do 48 hours before guests arrive.',
    intro: 'A calm dinner party is usually won before the guests arrive. The trick is moving every task that can be done early out of the final two hours, leaving only cooking steps that truly need to happen close to serving.',
    quickAnswer: 'Shop and make stable components 24–48 hours ahead, set the table and finish cold prep the morning of, then reserve the final hour for reheating, garnishing, lighting and welcoming guests.',
    relatedDownload: 'dinner-party-planner-printable',
    relatedLabel: 'Dinner Party Planner Printable',
    sections: [
      { heading: 'Start with arrival time and dinner time', body: 'Write down two separate times: when guests arrive and when you want to serve dinner. A 30-minute drinks window gives late arrivals some room and lets you finish a main dish without making everyone wait at the table. Work backward from serving time using the actual recipe timings, including preheating and resting.' },
      { heading: '48 hours before', body: 'Finalize the guest count, menu and grocery list. Buy everything except highly perishable items if needed. Make sauces, dressings, desserts or braises that improve after resting.' },
      { heading: 'The day before', body: 'Prep vegetables, marinate proteins, chill drinks, pull out serving dishes and set any table elements that will not get in the way of normal household use.' },
      { heading: 'Morning and afternoon of the party', body: 'Do the work that creates clutter now: chop, wash, assemble cold dishes, clear counters, empty the dishwasher and confirm oven temperatures and cook times.' },
      { heading: 'The final hour', body: 'Avoid any recipe step that requires a new cutting board or major cleanup. Focus on cooking, reheating, garnishing and atmosphere.', bullets: ['T - 60: start final cooking', 'T - 40: set out drinks and water', 'T - 25: warm serving dishes if needed', 'T - 15: light candles, music on, kitchen reset', 'T - 5: put away the prep list and welcome guests'] },
      { heading: 'Example: guests at 6:30 p.m., dinner at 7 p.m.', body: 'This sample works for a make-ahead dessert, a salad dressed at the last minute and a main with a 45-minute cook plus 15-minute rest. Adjust every cooking step to your own recipe; the times are a planning example.', bullets: ['4:30 p.m.: set the table, lay out serving utensils and clear the sink', '5:30 p.m.: preheat the oven and prepare the main', '6 p.m.: start the main; finish the drinks station', '6:15 p.m.: put out appetizers and water; set music and lighting', '6:30 p.m.: guests arrive; serve drinks', '6:45 p.m.: rest the main; dress the salad and finish sides', '7 p.m.: serve dinner; leave dessert ready for later'] },
      { heading: 'If you are running late', body: 'Drop an optional garnish or extra side before moving dinner much later. Put out a ready-to-eat appetizer, tell guests the updated plan and finish one task at a time. A simple menu served calmly works better than several unfinished dishes.' }
    ],
    checklist: ['Menu finalized', 'Groceries purchased', 'Serving dishes assigned', 'Drinks chilled', 'Table set', 'Dishwasher empty', 'Trash emptied', 'Final-hour cooking list visible'],
    mistakes: ['Choosing multiple dishes that need the oven at different temperatures', 'Leaving dessert to make after guests arrive', 'Using every burner at the same time', 'Forgetting serving utensils', 'Cleaning while the first guests are at the door'],
    faqs: [
      { q: 'How early should I start preparing for a dinner party?', a: 'Start shopping and make-ahead cooking 24–48 hours before whenever the menu allows.' },
      { q: 'What should I do one hour before a dinner party?', a: 'Finish time-sensitive cooking, set out drinks, reset the kitchen, handle lighting and music and avoid starting new prep projects.' },
      { q: 'When should I set the table for a dinner party?', a: 'If the space allows, set it the night before or the morning of the event so it is off the final-hour list.' }
    ]
  },
  {
    "slug": "dinner-party-menu-planning",
    "relatedGuides": [{"href": "/guides/dinner-party-timeline/", "label": "Build your 48-hour dinner timeline"}, {"href": "/guides/christmas-hosting-checklist/", "label": "Plan a holiday meal for guests"}],
    "category": "hosting",
    "title": "How to Plan a Dinner Party Menu | 3 Sample Menus & Prep Plan",
    "description": "Build an easy dinner party menu with three sample menus, a kitchen-capacity checklist, make-ahead tasks and a recipe timing worksheet.",
    "h1": "How to plan a dinner party menu your kitchen can actually handle.",
    "intro": "Plan around what you can cook and serve comfortably, not just which recipes look appealing. One main, one supporting side, something fresh and a finished dessert can make a generous meal without keeping you in the kitchen all evening.",
    "quickAnswer": "Choose one main, one easy side, one salad or vegetable and a dessert prepared ahead. Check dietary needs, oven conflicts and serving space before shopping.",
    "relatedDownload": "dinner-party-planner-printable",
    "relatedLabel": "Dinner Party Planner Printable",
    "sections": [
        {
            "heading": "Check the guest list before choosing recipes",
            "body": "Confirm headcount, preferences and dietary needs first. Ask guests what works for them rather than guessing substitutions. Choose a menu where guests can enjoy a complete meal without relying on one token side dish.",
            "bullets": [
                "How many people are eating?",
                "Which ingredients need to be avoided?",
                "Are there vegetarian or vegan guests?",
                "Will you serve at the table, buffet-style or family-style?",
                "How much fridge, oven and counter space is available?"
            ]
        },
        {
            "heading": "Use a four-part menu formula",
            "body": "Choose a main, a substantial side, a salad or vegetable and a dessert. Add a simple welcome snack only if it helps with arrival timing. Bread or a purchased component can remove work without making the meal feel incomplete.",
            "bullets": [
                "Main: the centerpiece that sets the cooking schedule",
                "Side: something that shares the main’s oven setting or can be made separately",
                "Fresh element: salad or a simply prepared vegetable",
                "Dessert: finished before guests arrive"
            ]
        },
        {
            "heading": "Menu 1: a relaxed pasta dinner",
            "body": "A pasta meal works well when the sauce and dessert are finished early. Leave the pasta itself until serving and use a sauce recipe that scales to your guest count.",
            "bullets": [
                "Main: pasta with a tomato-based sauce",
                "Fresh element: a green salad dressed just before serving",
                "Side: bread, purchased or prepared ahead",
                "Dessert: a cake or cookies prepared earlier",
                "Prep plan: finish sauce and dessert ahead; organize pasta water and serving bowls before arrival"
            ]
        },
        {
            "heading": "Menu 2: a roast-centered dinner",
            "body": "Let the main set the oven schedule. Choose a compatible side and a cold salad so every component does not compete for a different temperature. Follow the actual recipe for cooking and resting times.",
            "bullets": [
                "Main: your preferred roast recipe",
                "Side: potatoes cooked at a compatible temperature or a stovetop alternative",
                "Fresh element: a crisp salad",
                "Dessert: a purchased tart or an already-finished cake",
                "Prep plan: write the oven sequence, set out serving pieces and prepare salad components before guests arrive"
            ]
        },
        {
            "heading": "Menu 3: a flexible vegetarian table",
            "body": "A meal served in separate components lets guests build their own plate. Check the chosen recipes and packaged ingredients against the needs your guests have shared.",
            "bullets": [
                "Main: a lentil or bean-based dish",
                "Side: rice, couscous or another grain suited to the group",
                "Fresh element: chopped salad or seasonal vegetables",
                "Dessert: a make-ahead dessert suited to the guest list",
                "Prep plan: cook the main in advance where the recipe allows; keep toppings and dressings separate"
            ]
        },
        {
            "heading": "Write a kitchen-capacity worksheet",
            "body": "For each dish, record the equipment and the final active work. If two dishes need your hands at the same moment, simplify one of them before buying ingredients.",
            "bullets": [
                "Dish: [name] | Servings: [recipe yield]",
                "Oven temperature and time: [if needed]",
                "Burner or appliance: [what it uses]",
                "Make ahead: [what can be completed earlier]",
                "Finish before serving: [active steps and minutes]",
                "Serving dish and utensil: [assign them now]"
            ]
        },
        {
            "heading": "Build the shopping list from confirmed servings",
            "body": "Scale each recipe to the number of people eating it and consolidate repeated ingredients into one list. Check the pantry before buying. Add drinks, ice, napkins and any serving supplies so they do not become a second shopping trip."
        },
        {
            "heading": "Simplify the final thirty minutes",
            "body": "Keep only the time-sensitive cooking and finishing steps for the last half hour. If the menu is too ambitious, buy dessert, remove an extra side or switch one hot dish to a cold salad. Link the menu to a visible cooking timeline so each recipe has a place."
        }
    ],
    "checklist": [
        "Guest count and dietary needs confirmed",
        "Menu fits available equipment",
        "Recipes scaled to actual servings",
        "Repeated ingredients consolidated",
        "Serving dishes and utensils assigned",
        "Dessert ready early",
        "Final cooking order written",
        "One optional task to drop if needed"
    ],
    "mistakes": [
        "Choosing several dishes with incompatible oven settings",
        "Trying every recipe for the first time on the night",
        "Leaving salad, dessert and drinks all to the final minutes",
        "Treating chopped ingredients as fully finished dishes",
        "Buying groceries before confirming the guest count"
    ],
    "faqs": [
        {
            "q": "What is an easy dinner party menu?",
            "a": "Try one main, one simple side, one salad or vegetable and a dessert prepared in advance. The sample pasta menu above is one low-complexity starting point."
        },
        {
            "q": "How much food should I make?",
            "a": "Use each recipe’s stated yield and scale to the guests eating that dish. Consider the rest of the menu rather than treating every side as a full meal."
        },
        {
            "q": "Can I serve a bought dessert?",
            "a": "Yes. A purchased dessert can free your attention for the main meal. Plate it simply and check that it suits the guest list."
        },
        {
            "q": "How do I keep a menu manageable in a small kitchen?",
            "a": "Plan around the scarcest resource: oven space, burners, fridge space or your attention. Use make-ahead and cold components to reduce conflicts."
        }
    ]
},
  {
    slug: 'christmas-gift-budget',
    category: 'holiday',
    title: 'Christmas Gift Budget Guide | Simple Holiday Spending Plan',
    description: 'Build a realistic Christmas gift budget by person and category, include hidden holiday costs and track ordered, received and wrapped gifts in one system.',
    h1: 'A Christmas gift budget that accounts for more than the gifts.',
    intro: 'Holiday overspending often comes from the “small” categories around gifts: shipping, stockings, teacher gifts, wrapping, travel and last-minute add-ons. A useful budget lists the whole season before setting per-person amounts.',
    quickAnswer: 'Set one total holiday spending ceiling, reserve money for non-gift costs first, then divide the remaining gift budget by person or group instead of choosing amounts person by person with no overall limit.',
    relatedDownload: 'christmas-planner-printable',
    relatedLabel: 'Christmas Planner Printable',
    sections: [
      { heading: 'Start with a total, not a person-by-person wish list', body: 'Choose the amount you are comfortable spending across the entire season. This prevents a collection of individually reasonable purchases from creating an unreasonable total.' },
      { heading: 'Subtract the non-gift holiday costs', body: 'Reserve money for the categories that usually appear after the gift list is already “done.”', bullets: ['Wrapping and cards', 'Shipping', 'Stockings', 'Host gifts', 'Teacher or service gifts', 'Holiday meals', 'Travel and events'] },
      { heading: 'Create gift buckets', body: 'Divide the remaining gift amount among immediate family, extended family, friends and other recipients. A bucket makes it easier to trade off within a category without changing the overall plan.' },
      { heading: 'Track status, not just cost', body: 'A gift list should show idea, ordered, arrived, wrapped and delivered. That is what prevents duplicate purchases and the expensive “I forgot one thing” shopping trip.' }
    ],
    checklist: ['Total holiday ceiling', 'Non-gift costs reserved', 'Recipient list', 'Budget by person or group', 'Ordered status', 'Arrival status', 'Wrapped status', 'Shipping or delivery deadline'],
    mistakes: ['Budgeting only for gifts', 'Using sale prices as a reason to add more items', 'Forgetting stocking and small-gift totals', 'Losing track of online orders', 'Buying backup gifts before checking what has already arrived'],
    faqs: [
      { q: 'How do I make a Christmas gift budget?', a: 'Choose a total seasonal spending limit, subtract non-gift holiday costs, then divide the remaining amount among recipients or gift groups.' },
      { q: 'What should be included in a Christmas budget?', a: 'Include gifts, stockings, shipping, wrapping, cards, meals, travel, events and smaller appreciation gifts.' },
      { q: 'How do I keep track of Christmas gifts I ordered?', a: 'Track each item through ordered, arrived, wrapped and delivered so you can see what is actually complete.' }
    ]
  },
  {
    "slug": "christmas-hosting-checklist",
    "relatedGuides": [{"href": "/guides/dinner-party-menu-planning/", "label": "Choose a manageable dinner menu"}, {"href": "/guides/dinner-party-timeline/", "label": "Work backward from serving time"}],
    "category": "holiday",
    "title": "Christmas Hosting Checklist | 2-Week Plan & Dinner Schedule",
    "description": "Plan Christmas hosting with a two-week checklist, guest dish assignments, an oven worksheet, a sample dinner schedule and a smaller-menu fallback.",
    "h1": "Christmas hosting checklist: from two weeks out to dinner on the table.",
    "intro": "Christmas dinner is easier when the house, shopping and cooking each have a place in the plan. Use your serving time as the anchor, confirm what guests are bringing and move the work that can be done early out of the holiday itself.",
    "quickAnswer": "Confirm guests and menu two weeks out, check supplies and shop ahead, then write an oven schedule using your recipes. Keep Christmas Day focused on the main dish and finishing tasks.",
    "relatedDownload": "christmas-planner-printable",
    "relatedLabel": "Christmas Planner Printable",
    "sections": [
        {
            "heading": "Two weeks before: confirm the people and the meal",
            "body": "Decide what time guests should arrive and what time dinner will be served. Ask about dietary needs and confirm who is bringing food before finalizing the menu. Check whether overnight visitors need bedding or a separate breakfast plan.",
            "bullets": [
                "Guest count and arrival window",
                "Serving time and meal format",
                "Menu and dietary preferences",
                "Guest contributions and named owners",
                "Seats, table space and overnight arrangements"
            ]
        },
        {
            "heading": "One week before: check the house and supplies",
            "body": "Work through a short household list while you still have time to solve missing-chair or serving-dish problems. Shop shelf-stable ingredients and household supplies, then leave a separate list for fresher ingredients.",
            "bullets": [
                "Count chairs, plates, glasses and cutlery",
                "Assign serving dishes and utensils to each menu item",
                "Check table linens and guest towels",
                "Buy drinks, napkins, bin bags and wrapping supplies as needed",
                "Make fridge space before the final grocery shop"
            ]
        },
        {
            "heading": "Three days before: organize the cooking order",
            "body": "Review each recipe for what can be prepared ahead and what must be finished close to serving. Write the required oven temperature, equipment and finish time. Do not assume every make-ahead dish has the same reheating instructions.",
            "bullets": [
                "Dish | recipe | oven or burner | cooking duration",
                "Make-ahead task | planned day | person responsible",
                "Serving dish | utensil | final finishing step",
                "Check that overlapping recipes can use the same oven setting"
            ]
        },
        {
            "heading": "The day before: finish the setup",
            "body": "Set the table if it will not interfere with daily life. Prepare approved make-ahead components, chill drinks and put labels on serving dishes so helpers know where everything goes. Keep a short day-of list somewhere visible.",
            "bullets": [
                "Confirm guests’ dish quantities and arrival times",
                "Ask whether contributed dishes need oven or fridge space",
                "Set out coffee, tea and dessert plates",
                "Check the kitchen cleaning supplies and empty bins",
                "Lay out the day-of cooking list"
            ]
        },
        {
            "heading": "Example schedule: guests at 2 p.m., dinner at 3 p.m.",
            "body": "This example assumes the main needs two hours of cooking and thirty minutes of rest. It is a planning illustration, not a cooking instruction. Shift the main’s start time and every dependent step to match your recipe.",
            "bullets": [
                "Morning: complete cold prep, set the table and stage serving dishes",
                "12:30 p.m.: start the main according to its recipe",
                "1:30 p.m.: ready drinks and a simple welcome snack",
                "2 p.m.: guests arrive; confirm any contributed dishes",
                "2:30 p.m.: rest the main and finish compatible hot sides",
                "2:45 p.m.: prepare the final serving steps and fill water glasses",
                "3 p.m.: serve dinner; leave dessert ready for later"
            ]
        },
        {
            "heading": "Give each helper a complete, small job",
            "body": "Use a named task with a finish time instead of asking everyone to help generally. Keep one person coordinating the kitchen and assign jobs that do not all need the same counter or oven.",
            "bullets": [
                "Alex: drinks and water glasses by arrival time",
                "Jordan: bread and butter on the table before dinner",
                "Casey: welcome coats and show guests where to sit",
                "Taylor: dessert plates and coffee after the meal",
                "Guest bringing a side: confirm ready-to-serve status or the exact reheating need"
            ]
        },
        {
            "heading": "If you need a smaller Christmas menu",
            "body": "Keep the main, two useful accompaniments and one dessert, then remove optional extras. A simple arrival snack can buy time. Let guests know if dinner moves later and focus on one finishing step at a time instead of adding more dishes."
        },
        {
            "heading": "After dinner: make the reset easy",
            "body": "Stage containers before the meal so cleanup does not begin with a cupboard search. Decide which food guests would like to take home and who will handle dishes. Leave the hosting checklist with notes about quantities and timing for next year."
        }
    ],
    "checklist": [
        "Guests and serving time confirmed",
        "Food contributions assigned",
        "Dietary needs included in the menu",
        "Chairs and place settings counted",
        "Fridge and oven space planned",
        "Serving dishes and utensils ready",
        "Recipe-based cooking order visible",
        "Drinks and simple welcome snack ready",
        "Containers and cleanup plan prepared"
    ],
    "mistakes": [
        "Accepting extra dishes without checking oven space",
        "Starting all cooking on Christmas morning",
        "Giving helpers unclear tasks",
        "Forgetting dessert and drink supplies",
        "Making the guest arrival time and serving time identical"
    ],
    "faqs": [
        {
            "q": "When should I start planning Christmas dinner?",
            "a": "Two weeks ahead gives time to confirm guests, contributions and supplies. If you have less time, handle the menu and cooking-capacity decisions first."
        },
        {
            "q": "What can I do the day before Christmas dinner?",
            "a": "Set the table, chill drinks, stage serving pieces and complete tasks that your recipes specifically allow ahead of time. Keep final cooking steps on a separate day-of list."
        },
        {
            "q": "How do I manage one oven for Christmas dinner?",
            "a": "Write each dish’s temperature and time, check which can share space, and choose stovetop or cold sides where helpful. Build the sequence around the main dish’s actual recipe."
        },
        {
            "q": "How do I organize guests bringing food?",
            "a": "Assign one person to each dish and confirm quantity, arrival time and whether it needs refrigeration or reheating. Avoid asking several people for an unspecified side."
        }
    ]
},
  {
    slug: 'bridal-shower-games-for-groups',
    category: 'wedding',
    title: 'Bridal Shower Games by Group Size | Small, Medium & Large Showers',
    description: 'Choose bridal shower games based on group size, event length and guest mix, with low-pressure ideas for small gatherings through large showers.',
    h1: 'Bridal shower games that fit the group instead of forcing the group to fit the game.',
    intro: 'A game that works beautifully for eight people can become slow and awkward with forty. The easiest way to choose shower activities is to start with guest count, how well people know each other and how much event time you want the games to occupy.',
    quickAnswer: 'For under 12 guests, conversation-based games work well. For 12–25, use paper games plus one group activity. For 25+, choose games everyone can play simultaneously and avoid anything that requires every guest to speak one at a time.',
    relatedDownload: 'bridal-shower-games-printable',
    relatedLabel: 'Bridal Shower Games Printable Pack',
    sections: [
      { heading: 'Small showers: 6–12 guests', body: 'Smaller groups can handle activities where everyone participates verbally. Couple trivia, advice cards and “would she rather?” can turn into actual conversation instead of a long performance.' },
      { heading: 'Medium showers: 12–25 guests', body: 'Paper games become useful because everyone can play at the same time. Pair one seated printable with one optional interactive activity.', bullets: ['Bride trivia', 'Wedding word game', 'Would she rather?', 'Advice or wishes cards'] },
      { heading: 'Large showers: 25+ guests', body: 'Avoid anything that requires going around the room one person at a time. Use timed paper games, table-by-table challenges or passive activities guests can complete during food and conversation.' },
      { heading: 'Plan 20–35 total minutes of structured games', body: 'Unless the event is specifically game-focused, one to three activities is usually enough. People also came to talk, eat and spend time with the guest of honor.' }
    ],
    checklist: ['Guest count', 'Age and relationship mix', 'Available table space', 'Pens or supplies', 'Simple instructions', 'Tie-breaker', 'Small prizes if desired', 'Clear stopping point'],
    mistakes: ['Choosing too many games', 'Using games that embarrass the bride or guests', 'Making forty people introduce themselves before starting', 'Picking activities that require supplies you cannot easily reset', 'Letting games take over the entire shower'],
    faqs: [
      { q: 'How many bridal shower games should you play?', a: 'One to three games is usually enough for a typical shower unless games are a major part of the event.' },
      { q: 'What bridal shower games work for large groups?', a: 'Timed printable games, table challenges and activities everyone can complete simultaneously work better than round-the-room games.' },
      { q: 'Do you need prizes for bridal shower games?', a: 'No, but small prizes can make competitive games more fun. Keep them simple and easy to distribute.' }
    ]
  },
  {
    slug: 'how-to-host-mahjong-night',
    category: 'hosting',
    title: 'How to Host a Mahjong Night | Table Setup, Snacks & Flow',
    description: 'Plan a casual mahjong night with practical table setup, guest count, supplies, snack placement and game-night flow without over-hosting.',
    h1: 'How to host a mahjong night that keeps the table focused on the game.',
    intro: 'Mahjong night does not need elaborate decor or a complicated menu. The host’s main job is to make the table comfortable, the rules clear for the group and the food easy to eat without competing with tiles and score materials.',
    quickAnswer: 'Set the table before guests arrive, keep food and drinks on a nearby side surface, confirm the rules or version your group is playing and choose snacks that can be eaten cleanly between hands.',
    relatedDownload: 'mahjong-party-printables',
    relatedLabel: 'Mahjong Party Printables',
    sections: [
      { heading: 'Set the playing table first', body: 'The table should have enough space for tiles, racks and any score or reference materials. Remove centerpieces, candles or serving platters that shrink the play area.' },
      { heading: 'Put food beside the game, not on top of it', body: 'Use a nearby counter, bar cart or side table for snacks and drinks. Small plates and napkins should be within reach, but greasy finger foods are better avoided around tiles.' },
      { heading: 'Confirm the version and expectations', body: 'Mahjong has different rulesets and house customs. If beginners are joining, tell them what version the group plays and whether you will teach before starting.' },
      { heading: 'Keep hosting decisions simple', body: 'A few snacks, water and one or two other drink options are enough. The more the host has to replenish or cook, the more often the game stops.' }
    ],
    checklist: ['Tiles and racks ready', 'Rule or reference cards', 'Score materials if used', 'Clear playing surface', 'Side surface for food', 'Napkins and coasters', 'Low-mess snacks', 'Water available'],
    mistakes: ['Serving the entire meal on the playing table', 'Assuming everyone knows the same rules', 'Starting before all supplies are laid out', 'Choosing snacks that leave greasy or sticky hands', 'Overplanning decorations instead of table comfort'],
    faqs: [
      { q: 'What do I need to host a mahjong night?', a: 'You need the game set, enough seating, any reference or score materials and a separate place for food and drinks.' },
      { q: 'What food is good for mahjong night?', a: 'Choose low-mess snacks that can be eaten easily between hands and keep them on a side table rather than in the playing area.' },
      { q: 'Can beginners come to a mahjong night?', a: 'Yes. Let them know which ruleset you use and plan a short teaching or practice period before regular play.' }
    ]
  },
  {
    slug: 'aging-parent-care-binder-checklist',
    category: 'family',
    title: 'Aging Parent Care Binder Checklist | What to Organize',
    description: 'A practical checklist for organizing contacts, appointments, medications, insurance references, home information and document locations for an aging parent.',
    h1: 'What to put in an aging parent care binder — and what to keep somewhere more secure.',
    intro: 'A care binder is most useful as a shared reference for the practical information family members regularly need. It should not become a duplicate vault of every sensitive document or password. Organize access, not unnecessary exposure.',
    quickAnswer: 'Include current contacts, provider information, medication references, appointments, insurance details, household contacts and the locations of important legal or financial documents. Keep original legal records, account credentials and highly sensitive information in their proper secure locations.',
    relatedDownload: 'aging-parent-care-binder-printable',
    relatedLabel: 'Aging Parent Care Binder Printable',
    sections: [
      { heading: 'Section 1: people and care contacts', body: 'Keep the names, roles and contact information for the people family members may need to reach quickly.', bullets: ['Primary care provider', 'Specialists', 'Pharmacy', 'Emergency contacts', 'Neighbors or local support', 'Home care providers if applicable'] },
      { heading: 'Section 2: appointments and medication reference', body: 'Use the binder to track appointment dates, questions and a current medication list. Update medication information whenever a provider changes it rather than letting old pages remain mixed in.' },
      { heading: 'Section 3: insurance and household information', body: 'Include insurance company names, member-service phone numbers, home service contacts and recurring household information that a caregiver may need to coordinate.' },
      { heading: 'Section 4: document location map', body: 'Instead of photocopying every legal or financial document into the binder, record where originals are securely kept and who has authorized access. The binder can point to the information without becoming the least secure place it lives.' }
    ],
    checklist: ['Emergency contacts', 'Provider list', 'Pharmacy', 'Current medication list', 'Upcoming appointments', 'Insurance references', 'Home service contacts', 'Document location notes', 'Last updated date on key pages'],
    mistakes: ['Writing passwords in an easily accessible binder', 'Keeping outdated medication pages mixed with current ones', 'Copying every sensitive document into one physical location', 'Failing to date updates', 'Assuming all family members have legal authority to access every record'],
    faqs: [
      { q: 'What should be in a caregiver binder for an aging parent?', a: 'Include contacts, provider and pharmacy information, medication references, appointments, insurance details, household contacts and notes about where important documents are stored.' },
      { q: 'Should passwords be kept in a care binder?', a: 'Generally, avoid placing unnecessary credentials in a binder that multiple people may access. Use an appropriate secure method for account access.' },
      { q: 'How often should an aging parent care binder be updated?', a: 'Update it whenever medications, providers, insurance or key contacts change, and review the core pages periodically for stale information.' }
    ]
  },
  {
    slug: 'creator-media-kit-sections',
    category: 'creator',
    title: 'What to Put in a Creator Media Kit | Sections Brands Actually Need',
    description: 'Build a concise creator media kit with the sections brands need: positioning, audience, services, examples, performance context and a clear contact path.',
    h1: 'What to put in a creator media kit so a brand can understand you in two minutes.',
    intro: 'A media kit is not a full autobiography or a screenshot dump of every metric. It is a decision document. A brand should be able to understand who you reach, what you make, what you offer and how to contact you without digging.',
    quickAnswer: 'Use 5–8 concise sections: positioning, audience, platform metrics, content examples, services, selected results or partnerships, optional rates/process and contact information.',
    relatedDownload: 'creator-media-kit-template',
    relatedLabel: 'Creator Media Kit Template',
    sections: [
      { heading: 'Lead with positioning, not follower count', body: 'Start with one or two sentences explaining your content niche, audience and point of view. Brands need context before metrics.' },
      { heading: 'Show audience and platform metrics with labels', body: 'Use current numbers and identify the date range or platform where needed. Avoid mixing lifetime, monthly and single-post metrics without explaining what they represent.', bullets: ['Followers or subscribers', 'Average views or reach', 'Engagement metric when meaningful', 'Audience location or age when relevant', 'Newsletter size if part of the offer'] },
      { heading: 'Make services easy to scan', body: 'List what a brand can actually hire you for: sponsored content, UGC, photography, short-form video, event coverage, newsletter placements or other deliverables you genuinely offer.' },
      { heading: 'Use proof selectively', body: 'One strong campaign example with a result and a short explanation is more useful than ten brand logos with no context. Show what you created and why it mattered.' },
      { heading: 'End with the next step', body: 'Put the preferred email or inquiry path on the final page and make it visually obvious. A media kit should create a conversation, not become the conversation itself.' }
    ],
    checklist: ['One-sentence positioning', 'Current audience metrics', 'Primary platforms', 'Services and deliverables', '2–4 content examples', 'Selected partnership or result', 'Contact information', 'Last updated date'],
    mistakes: ['Opening with a long personal biography', 'Including outdated screenshots', 'Showing metrics with no timeframe', 'Listing services you do not actually want to sell', 'Using tiny text to fit too much onto one page', 'Forgetting a clear contact method'],
    faqs: [
      { q: 'How many pages should a creator media kit be?', a: 'Many creators can communicate the essentials in 3–6 pages. The exact length matters less than keeping it easy to scan.' },
      { q: 'Should I put rates in my media kit?', a: 'It is optional. Include them if your pricing is standardized; leave them out if scope varies significantly by campaign.' },
      { q: 'What metrics should a creator include in a media kit?', a: 'Use current, relevant platform metrics such as followers, reach or views, engagement when meaningful and audience demographics that help a brand evaluate fit.' }
    ]
  }
];

export const supportGuideMap = new Map(supportGuides.map((guide) => [guide.slug, guide]));
