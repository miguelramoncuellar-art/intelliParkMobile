import { Component } from '@angular/core';

import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

/**
 * Tarifa por hora según el tipo de vehículo.
 */
interface ParkingRate {
  vehicleType: string;
  pricePerHour: number;
}

/**
 * Página informativa del parqueadero: datos generales,
 * horario, tarifas y contacto.
 */
@Component({
  selector: 'app-parking-info',
  templateUrl: './parking-info.page.html',
  styleUrls: ['./parking-info.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonTitle,
    IonToolbar
  ]
})
export class ParkingInfoPage {

  readonly parkingName = 'IntelliPark - Sede Principal';
  readonly address = 'Calle 00 # 00 - 00, Bogotá';
  readonly schedule = 'Lunes a sábado: 6:00 a. m. - 10:00 p. m.';
  readonly phone = '300 000 0000';
  readonly email = 'contacto@intellipark.com';

  readonly appVersion = '1.0.0';
  readonly developer = 'Miguel';

  readonly rates: ParkingRate[] = [
    { vehicleType: 'Carro', pricePerHour: 3000 },
    { vehicleType: 'Moto', pricePerHour: 1500 }
  ];

  /**
   * Convierte un valor numérico en texto de tarifa.
   * Ejemplo: 3000 -> "$3.000 / hora"
   */
  formatRate(pricePerHour: number): string {

    if (!Number.isFinite(pricePerHour) || pricePerHour <= 0) {
      return 'No disponible';
    }

    const formattedPrice = Math.round(pricePerHour)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `$${formattedPrice} / hora`;
  }
}