type Events = {
  on: ['sendEmail'];
};

type Metadata = {
  events: Events;
};

export type Mailer = {
  metadata: Metadata
};
