import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidoI } from 'src/app/models/pedido.interface';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-historyinfo',
  templateUrl: './historyinfo.page.html',
  styleUrls: ['./historyinfo.page.scss'],
})
export class HistoryinfoPage implements OnInit {
  mensaje:string;
  listapedidos:PedidoI[];
  constructor(private pedidoSrv:PedidosService,
    private router:Router,
    private shareData:ShareDataService) {
    
   }

  ngOnInit() {
    this.pedidoSrv.obtenerPedidos().subscribe(
      res =>{
        console.log(res);
        this.listapedidos = res;
      }
    )
    //this.controlarVacio();
  }
  controlarVacio(){
    if (this.listapedidos==null){
      this.mensaje="No ha realizado ninguna compra aún."
    }
  }
  abrirDetalle(str:string){
    this.router.navigateByUrl("/historyinfo/"+str);
    this.shareData.setPedidoID(str);
  }

}
