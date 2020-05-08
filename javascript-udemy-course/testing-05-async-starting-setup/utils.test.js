// jest.mock('./http');
const { loadTitle } = require('./utils');

it('Should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title.toBe('DELECTUS AUT AUTEM'));
  });
});
