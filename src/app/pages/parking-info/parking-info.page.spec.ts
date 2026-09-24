import { ParkingInfoPage } from './parking-info.page';

describe('ParkingInfoPage - formatRate', () => {

  let page: ParkingInfoPage;

  beforeEach(() => {
    page = new ParkingInfoPage();
  });

  it('debe formatear la tarifa con separador de miles', () => {
    expect(page.formatRate(3000)).toBe('$3.000 / hora');
  });

  it('debe formatear tarifas menores a mil sin separador', () => {
    expect(page.formatRate(500)).toBe('$500 / hora');
  });

  it('debe retornar "No disponible" si la tarifa es 0 o negativa', () => {
    expect(page.formatRate(0)).toBe('No disponible');
    expect(page.formatRate(-1500)).toBe('No disponible');
  });
});