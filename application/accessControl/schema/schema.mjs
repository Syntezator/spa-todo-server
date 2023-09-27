export const addProjectSchema = {
  type: 'object',
  properties: {
    title: {type: 'string'},
    description: {type: 'string'},
  },
  anyOf: [
    {required: ['title', 'description']}, 
    {not: {required: ['unknownProperty']}}
  ],
};


