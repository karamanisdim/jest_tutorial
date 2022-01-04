const functions = require('./functions');

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
  });

// toBeFalsy (null, zero, undefined are falsy)
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// toBeTruthy 
test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
});

// toEqual ->if toBe used will fail because you need same data types
test('User should be D K object', () => {
    expect(functions.createUser()).toEqual({
      firstName: 'D',
      lastName: 'K'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
    expect(functions.add(load1,load2)).toBeLessThanOrEqual(1600);
});

// Regex - Regular expressions
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i); // lower i stands for case insensitive
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data - Promise
// If we comment out expect.assertions and remove return, test will pass no matter what name, still throw error
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});