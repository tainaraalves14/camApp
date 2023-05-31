import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from '../interfaces/Foto.interface';

@Injectable({
  providedIn: 'root'
})

export class FotoService {

  // Lista das fotos armazenadas no dispositivo
  fotos: Foto[] = [];
   
  //Cria uma variavel para armazenar o local fisico (pasta) das fotos
  private FOTO_ARMAZENAMENTO: string = "fotos";
  
  constructor() { }

  

}
