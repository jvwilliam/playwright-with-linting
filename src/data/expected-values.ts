export const EXPECTED_VALUES = {
  homePage: {
    title: 'JV William Andal | Modern QA | Web App Testing Specialist',
    contactDetails: 'contact@jvwilliam.com',
  },
} as const;

export type ExpectedValues = typeof EXPECTED_VALUES;
