import sortObjProp from '../func';

test('should sort with using of rules', () => {
  const result = sortObjProp({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level']);

  expect(result).toEqual([
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ]);
});

test('should sort in alfabet order', () => {
  const result = sortObjProp({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, []);

  expect(result).toEqual([
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ]);
});
