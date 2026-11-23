// EDIT THIS FILE to change the Sales, Insurance, Services, and About Us sections on the home page.
// No rebuild logic is needed: change the text, run the build, upload. Leave a field '' to hide it.
// Anything marked DRAFT is placeholder wording written by us: replace it with West Coast Motors' real details.

export const SALES = {
  eyebrow: 'Sales',
  title: 'Sales',
  intro: '',                                  // add a short line about sales here, or leave empty
}

// Insurance lives inside Sales
export const INSURANCE = {
  eyebrow: 'Insurance',
  title: 'Insurance',
  intro: 'Insurance details will be added here.',   // DRAFT: replace with your insurance information
  points: [],             // e.g. [{ title: 'New vehicle insurance', text: '...' }]. Empty = hidden.
  partners: [],           // e.g. ['Insurer name']. Empty = hidden.
  cta: '',                // e.g. 'Ask about insurance'. Empty = no button.
  wa: 'Hi West Coast Motors, I need help with vehicle insurance.',
}

export const SERVICES = {
  eyebrow: 'Services',
  title: ['Our', 'services'],      // DRAFT heading
  text: [
    'Information about our services will be added here.',   // DRAFT: replace with your explanation of the services
  ],
}

export const ABOUT = {
  eyebrow: 'About us',
  title: ['West Coast Motors,', 'Mangalore'],
  text: [
    'West Coast Motors is an authorised Hero MotoCorp dealership in Kankanady, Mangalore, bringing the full Hero petrol range and VIDA electric scooters to the coast.',
    'Add your story here: how long you have been serving Mangalore, your team, awards and what customers can expect.',   // DRAFT: replace
  ],
  photo: null,             // e.g. 'showroom.jpg' (put the file in public/images/)
  facts: [],               // e.g. [['2005', 'Serving Mangalore since'], ['10,000+', 'Happy riders']]. Empty = hidden.
}
