'use strict';

describe('fillTank', () => {
  const { fillTank } = require('./fillTank');

  it(`should be declared`, () => {
    expect(fillTank)
      .toBeInstanceOf(Function);
  });


  it('should change money and fuelRemains', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50, 2);
    expect(customer)
      .toEqual(
        {
          money: 2900, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 10,
          }
        });
  });

  it('If the amount is not given, should be fuelRemains = maxTankCapacity', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50);
    expect(customer)
      .toEqual(
        {
          money: 1400, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 40,
          }
        });
  });

  it('If the amount > maxTankCapacity, should be fuelRemains = maxTankCapacity', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50, 45);
    expect(customer)
      .toEqual(
        {
          money: 1400, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 40,
          }
        });
  });

  it('If the ordered amount > available money, should be fuelRemains for available money', () => {
    const customer = {
      money: 1000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50, 70);
    expect(customer)
      .toEqual(
        {
          money: 0, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 28,
          }
        });
  });

  it('Should be rounded poured amount number to the tenth part', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50, 29.55);
    expect(customer)
      .toEqual(
        {
          money: 1525, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 37.5,
          }
        });
  });

  it('If the poured amount is less than 2 liters, fuelRemains should not be changed', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50, 1);
    expect(customer)
      .toEqual(
        {
          money: 3000, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 8,
          }
        });
  });

  it('Should be rounded the price of the purchased fuel to the nearest hundredth part', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      }
    };

    fillTank(customer, 50.78, 2.68);
    expect(customer)
      .toEqual(
        {
          money: 2867.97, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 10.6,
          }
        });
  });

  it('Should be rounded poured amount number to the tenth part if fuelRemains is float', () => {
    const customer = {
      money: 3000, 
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 37.68,
      }
    };

    fillTank(customer, 50.78, 5);
    expect(customer)
      .toEqual(
        {
          money: 2883.21, 
          vehicle: {
            maxTankCapacity: 40,
            fuelRemains: 39.98,
          }
        });
  });
});
