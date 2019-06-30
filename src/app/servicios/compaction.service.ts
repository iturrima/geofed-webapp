import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompactionService {

  
 constructor() { 

  console.log("servicio listo para usar");

  }

    
// W
W_1_A69:number = 1;
W_2_A70:number = 1.3;
W_3_A71:number = 1.6;
W_4_A72:number = 1.9;
W_5_A73:number = 2.2;
W_6_A74:number = 2.5;
W_7_A75:number = 2.8;
W_8_A76:number = 3.1;
W_9_A77:number = 3.4;
W_10_A78:number = 3.7;
W_11_A79:number = 4;
W_12_A80:number = 4.3;
W_13_A81:number = 4.6;
W_14_A82:number = 4.9;
W_15_A83:number = 5.2;
W_16_A84:number = 5.5;
W_17_A85:number = 5.8;
W_18_A86:number = 6.1;
W_19_A87:number = 6.4;
W_20_A88:number = 6.7;
W_21_A89:number = 7;
W_22_A90:number = 7.3;
W_23_A91:number = 7.6;
W_24_A92:number = 7.9;
W_25_A93:number = 8.2;
W_26_A94:number = 8.5;
W_27_A95:number = 8.8;
W_28_A96:number = 9.1;
W_29_A97:number = 9.4;
W_30_A98:number = 9.7;
W_31_A99:number = 10;
W_32_A100:number = 10.3;
W_33_A101:number = 10.6;
W_34_A102:number = 10.9;
W_35_A103:number = 11.2;
W_36_A104:number = 11.5;
W_37_A105:number = 11.8;
W_38_A106:number = 12.1;
W_39_A107:number = 12.4;
W_40_A108:number = 12.7;
W_41_A109:number = 13;

//celdas
Columnas_Density_G144:number = 1665; //SUMA(G129:G143)
Columnas_Res2_J144:number = 85.5479867658875; //SUMA(J129:J143)
Columnas_Res2_J145:number = 15; //CONTAR(G129:G143)
Columnas_Density2_L144:number = 189679;//SUMA(L129:L143)



//variables
  Var_Woptmax_B51:number =	13.67;
  Var_Woptmin_B52:number =	7.23;
  Var_Steep_B53:number =	1.80;
  Var_Sopt_B54:number =	77.00;
  // Var_Sopt_B54:number =	this.forma.value.nombrecompleto.nombre;
  Var_Gs_B55:number =	2.70;
  Var_Smax_B56:number =	98.00;
  Var_Dmin_B57:number =	113.9272517;
  Var_Dmax_B58:number =	134.4717292;
  Var_k_B59:number =	0.000033333;
  Var_R2_B60:number = 1-this.Columnas_Res2_J144/(this.Columnas_Density2_L144-(Math.pow(this.Columnas_Density_G144,2)/this.Columnas_Res2_J145));
  Var_E90check_B61:number  =	30.593;



// parametros fijos
Cero4:number = 0.00004;
Cero2:number = 0.00002;
Nove9:number = 0.9999999;
Cien:number = 100;

//Model Parameters - Imputs Modelo

MP_CM3:number = 62.42796;

//Model Parameters - Imputs Usuario
MP_Gs_C13:number = 2.7;
MP_Steep_C14:number = 1.8;
MP_Sopt_C15:number = 77.0;
MP_Water_B17:number = 1;
MP_WaterRange_C17:number = 13;
MP_Dmax_STD_E13:number = 125.71915883322;
MP_Dmax_MOD_E14:number = 134.142901457967;
MP_Sm_E15:number = 98.0;
MP_Dfield_E17:number = 5;
MP_E90_G13:number = 30000;

//Project Data - Imputs Usuario

PD_Wfield_G20:number = 9.5;
PD_Dfield_G21:number = 125;

//Model Parameters - Resultados
 MP_Wopt_STDG14 = (this.MP_Sopt_C15*this.MP_Gs_C13*this.MP_CM3-this.MP_Sopt_C15*this.MP_Dmax_STD_E13)/(this.MP_Gs_C13*this.MP_Dmax_STD_E13);
 MP_Wopt_MOD_G15 = (this.MP_Sopt_C15*this.MP_Gs_C13*this.MP_CM3-this.MP_Sopt_C15*this.MP_Dmax_MOD_E14)/(this.MP_Gs_C13*this.MP_Dmax_MOD_E14);
 MP_R2_G17 = this.Var_R2_B60;

// Grilla de Celdas
 Grilla_E_M61:number =	1;
 Grilla_Wopt_M62:number =	13.67416569;
 Grilla_Gmmax_M63:number =	113.9285876;
 Grilla_a_M64:number =	0.000036;
 Grilla_b_M65:number =	-0.00098454;
 Grilla_c_M66:number =	0.015508809;
 Grilla_DMAX_L69:number =	134.47172924446;// SI(62.42796*$B$56*$B$55/($A69*$B$55+$B$56)>$B$58,$B$58,62.42796*$B$56*$B$55/($A69*$B$55+$B$56))
 Grilla_H_H129:number = 1;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(1:1)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
 Grilla_H_H134:number = 12400;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(8:8)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
 Grilla_H_H139:number = 56000;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(11:11)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
 Grilla_Z_Z61:number = this.Grilla_H_H134;
 Grilla_Z_Z62:number = this.MP_Wopt_STDG14;
 Grilla_Z_Z63:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_Z_Z62*this.Var_Gs_B55+this.Var_Sopt_B54);
 Grilla_Z_Z65:number =	-this.Cero4*this.Grilla_Z_Z62*this.Var_Steep_B53;
 Grilla_Z_Z66:number = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_Z_Z62,2)+(1/this.Grilla_Z_Z63);
 Grilla_Y_Y61:number = this.Grilla_H_H129;
 // Grilla_Y_Y62:number = 13.67416569;
 Grilla_Y_Y62:number =this.Var_Woptmin_B52+(this.Var_Woptmax_B51-this.Var_Woptmin_B52)*(Math.pow(10,(-this.Grilla_Y_Y61*this.Var_k_B59)));
 Grilla_Y_Y63:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_Y_Y62*this.Var_Gs_B55+this.Var_Sopt_B54);
 Grilla_Y_Y65:number =	-this.Cero4*this.Grilla_Y_Y62*this.Var_Steep_B53;
 Grilla_Y_Y66:number = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_Y_Y62,2)+(1/this.Grilla_Y_Y63);

 Grilla_AA_AA61:number = this.Grilla_H_H139;
 Grilla_AA_AA62:number = this.MP_Wopt_MOD_G15;
 Grilla_AA_AA63:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_AA_AA62*this.Var_Gs_B55+this.Var_Sopt_B54);
 Grilla_AA_AA65:number =	-this.Cero4*this.Grilla_AA_AA62*this.Var_Steep_B53;
// =0.00002*$B$53*(AA$62^2)+(1/AA$63)
 Grilla_AA_AA66:number = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_AA_AA62,2)+(1/this.Grilla_AA_AA63);


  // (1/($M$64*$A69^2+Z$65*$A69+Z$66)>$L69,$L69*0.9999999,SI(1/($M$64*$A69^2+Z$65*$A69+Z$66)>$Y69,1/($M$64*$A69^2+Z$65*$A69+Z$66),+$Y69))
  STD1_IF:number = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Z_Z65*this.W_1_A69+this.Grilla_Z_Z66);
  STD1_1:number = this.Grilla_DMAX_L69*this.Nove9;
  STD1_IF_prueba:number = this.W_1_A69+this.Grilla_Z_Z66;


  // formulas Field Target - Columna
  TAR_1_H63:number = this.PD_Wfield_G20;
  TAR_2_I63:number = this.PD_Dfield_G21;


  // formulas Modified - Columna J
  ZER_1_B69:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Cien);
  ZER_2_B70:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_2_A70*this.Var_Gs_B55+this.Cien);
  ZER_3_B71:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_3_A71*this.Var_Gs_B55+this.Cien);
  ZER_4_B72:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_4_A72*this.Var_Gs_B55+this.Cien);
  ZER_5_B73:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_5_A73*this.Var_Gs_B55+this.Cien);
  ZER_6_B74:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_6_A74*this.Var_Gs_B55+this.Cien);
  ZER_7_B75:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_7_A75*this.Var_Gs_B55+this.Cien);
  ZER_8_B76:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_8_A76*this.Var_Gs_B55+this.Cien);
  ZER_9_B77:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_9_A77*this.Var_Gs_B55+this.Cien);
  ZER_10_B78:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_10_A78*this.Var_Gs_B55+this.Cien);
  ZER_11_B79:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_11_A79*this.Var_Gs_B55+this.Cien);
  ZER_12_B80:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_12_A80*this.Var_Gs_B55+this.Cien);
  ZER_13_B81:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_13_A81*this.Var_Gs_B55+this.Cien);
  ZER_14_B82:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_14_A82*this.Var_Gs_B55+this.Cien);
  ZER_15_B83:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_15_A83*this.Var_Gs_B55+this.Cien);
  ZER_16_B84:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_16_A84*this.Var_Gs_B55+this.Cien);
  ZER_17_B85:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_17_A85*this.Var_Gs_B55+this.Cien);
  ZER_18_B86:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_18_A86*this.Var_Gs_B55+this.Cien);
  ZER_19_B87:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_19_A87*this.Var_Gs_B55+this.Cien);
  ZER_20_B88:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_20_A88*this.Var_Gs_B55+this.Cien);
  ZER_21_B89:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_21_A89*this.Var_Gs_B55+this.Cien);
  ZER_22_B90:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_22_A90*this.Var_Gs_B55+this.Cien);
  ZER_23_B91:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_23_A91*this.Var_Gs_B55+this.Cien);
  ZER_24_B92:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_24_A92*this.Var_Gs_B55+this.Cien);
  ZER_25_B93:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_25_A93*this.Var_Gs_B55+this.Cien);
  ZER_26_B94:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_26_A94*this.Var_Gs_B55+this.Cien);
  ZER_27_B95:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_27_A95*this.Var_Gs_B55+this.Cien);
  ZER_28_B96:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_28_A96*this.Var_Gs_B55+this.Cien);
  ZER_29_B97:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_29_A97*this.Var_Gs_B55+this.Cien);
  ZER_30_B98:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_30_A98*this.Var_Gs_B55+this.Cien);
  ZER_31_B99:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_31_A99*this.Var_Gs_B55+this.Cien);
  ZER_32_B100:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_32_A100*this.Var_Gs_B55+this.Cien);
  ZER_33_B101:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_33_A101*this.Var_Gs_B55+this.Cien);
  ZER_34_B102:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_34_A102*this.Var_Gs_B55+this.Cien);
  ZER_35_B103:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_35_A103*this.Var_Gs_B55+this.Cien);
  ZER_36_B104:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_36_A104*this.Var_Gs_B55+this.Cien);
  ZER_37_B105:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_37_A105*this.Var_Gs_B55+this.Cien);
  ZER_38_B106:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_38_A106*this.Var_Gs_B55+this.Cien);
  ZER_39_B107:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_39_A107*this.Var_Gs_B55+this.Cien);
  ZER_40_B108:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_40_A108*this.Var_Gs_B55+this.Cien);
  ZER_41_B109:number = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_41_A109*this.Var_Gs_B55+this.Cien);



  // formulas Modified - Columna J
  MOD_1_J69:number = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_AA_AA65*this.W_1_A69+this.Grilla_AA_AA66);
  MOD_2_J70:number = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_AA_AA65*this.W_2_A70+this.Grilla_AA_AA66);
  MOD_3_J71:number = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_AA_AA65*this.W_3_A71+this.Grilla_AA_AA66);
  MOD_4_J72:number = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_AA_AA65*this.W_4_A72+this.Grilla_AA_AA66);
  MOD_5_J73:number = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_AA_AA65*this.W_5_A73+this.Grilla_AA_AA66);
  MOD_6_J74:number = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_AA_AA65*this.W_6_A74+this.Grilla_AA_AA66);
  MOD_7_J75:number = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_AA_AA65*this.W_7_A75+this.Grilla_AA_AA66);
  MOD_8_J76:number = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_AA_AA65*this.W_8_A76+this.Grilla_AA_AA66);
  MOD_9_J77:number = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_AA_AA65*this.W_9_A77+this.Grilla_AA_AA66);
  MOD_10_J78:number = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_AA_AA65*this.W_10_A78+this.Grilla_AA_AA66);
  MOD_11_J79:number = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_AA_AA65*this.W_11_A79+this.Grilla_AA_AA66);
  MOD_12_J80:number = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_AA_AA65*this.W_12_A80+this.Grilla_AA_AA66);
  MOD_13_J81:number = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_AA_AA65*this.W_13_A81+this.Grilla_AA_AA66);
  MOD_14_J82:number = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_AA_AA65*this.W_14_A82+this.Grilla_AA_AA66);
  MOD_15_J83:number = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_AA_AA65*this.W_15_A83+this.Grilla_AA_AA66);
  MOD_16_J84:number = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_AA_AA65*this.W_16_A84+this.Grilla_AA_AA66);
  MOD_17_J85:number = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_AA_AA65*this.W_17_A85+this.Grilla_AA_AA66);
  MOD_18_J86:number = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_AA_AA65*this.W_18_A86+this.Grilla_AA_AA66);
  MOD_19_J87:number = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_AA_AA65*this.W_19_A87+this.Grilla_AA_AA66);
  MOD_20_J88:number = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_AA_AA65*this.W_20_A88+this.Grilla_AA_AA66);
  MOD_21_J89:number = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_AA_AA65*this.W_21_A89+this.Grilla_AA_AA66);
  MOD_22_J90:number = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_AA_AA65*this.W_22_A90+this.Grilla_AA_AA66);
  MOD_23_J91:number = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_AA_AA65*this.W_23_A91+this.Grilla_AA_AA66);
  MOD_24_J92:number = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_AA_AA65*this.W_24_A92+this.Grilla_AA_AA66);
  MOD_25_J93:number = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_AA_AA65*this.W_25_A93+this.Grilla_AA_AA66);
  MOD_26_J94:number = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_AA_AA65*this.W_26_A94+this.Grilla_AA_AA66);
  MOD_27_J95:number = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_AA_AA65*this.W_27_A95+this.Grilla_AA_AA66);
  MOD_28_J96:number = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_AA_AA65*this.W_28_A96+this.Grilla_AA_AA66);
  MOD_29_J97:number = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_AA_AA65*this.W_29_A97+this.Grilla_AA_AA66);
  MOD_30_J98:number = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_AA_AA65*this.W_30_A98+this.Grilla_AA_AA66);
  MOD_31_J99:number = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_AA_AA65*this.W_31_A99+this.Grilla_AA_AA66);
  MOD_32_J100:number = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_AA_AA65*this.W_32_A100+this.Grilla_AA_AA66);
  MOD_33_J101:number = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_AA_AA65*this.W_33_A101+this.Grilla_AA_AA66);
  MOD_34_J102:number = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_AA_AA65*this.W_34_A102+this.Grilla_AA_AA66);
  MOD_35_J103:number = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_AA_AA65*this.W_35_A103+this.Grilla_AA_AA66);
  MOD_36_J104:number = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_AA_AA65*this.W_36_A104+this.Grilla_AA_AA66);
  MOD_37_J105:number = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_AA_AA65*this.W_37_A105+this.Grilla_AA_AA66);
  MOD_38_J106:number = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_AA_AA65*this.W_38_A106+this.Grilla_AA_AA66);
  MOD_39_J107:number = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_AA_AA65*this.W_39_A107+this.Grilla_AA_AA66);
  MOD_40_J108:number = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_AA_AA65*this.W_40_A108+this.Grilla_AA_AA66);
  MOD_41_J109:number = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_AA_AA65*this.W_41_A109+this.Grilla_AA_AA66);

//=SI(1/($M$64*$A69^2+Y$65*$A69+Y$66)>$L69,$L69*0.9999999,1/($M$64*$A69^2+Y$65*$A69+Y$66))
// =SI(1/($M$64*$A69^2+AA$65*$A69+AA$66)>$L69,$L69*0.9999999,SI(1/($M$64*$A69^2+AA$65*$A69+AA$66)>$Z69,1/($M$64*$A69^2+AA$65*$A69+AA$66),+$Z69))
//1/($M$64*$A69^2+Y$65*$A69+Y$66)

  // formulas Standard - Columna I
  STD_1_I69:number = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Z_Z65*this.W_1_A69+this.Grilla_Z_Z66);
  STD_2_I70:number = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_Z_Z65*this.W_2_A70+this.Grilla_Z_Z66);
  STD_3_I71:number = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_Z_Z65*this.W_3_A71+this.Grilla_Z_Z66);
  STD_4_I72:number = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_Z_Z65*this.W_4_A72+this.Grilla_Z_Z66);
  STD_5_I73:number = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_Z_Z65*this.W_5_A73+this.Grilla_Z_Z66);
  STD_6_I74:number = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_Z_Z65*this.W_6_A74+this.Grilla_Z_Z66);
  STD_7_I75:number = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_Z_Z65*this.W_7_A75+this.Grilla_Z_Z66);
  STD_8_I76:number = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_Z_Z65*this.W_8_A76+this.Grilla_Z_Z66);
  STD_9_I77:number = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_Z_Z65*this.W_9_A77+this.Grilla_Z_Z66);
  STD_10_I78:number = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_Z_Z65*this.W_10_A78+this.Grilla_Z_Z66);
  STD_11_I79:number = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_Z_Z65*this.W_11_A79+this.Grilla_Z_Z66);
  STD_12_I80:number = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_Z_Z65*this.W_12_A80+this.Grilla_Z_Z66);
  STD_13_I81:number = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_Z_Z65*this.W_13_A81+this.Grilla_Z_Z66);
  STD_14_I82:number = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_Z_Z65*this.W_14_A82+this.Grilla_Z_Z66);
  STD_15_I83:number = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_Z_Z65*this.W_15_A83+this.Grilla_Z_Z66);
  STD_16_I84:number = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_Z_Z65*this.W_16_A84+this.Grilla_Z_Z66);
  STD_17_I85:number = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_Z_Z65*this.W_17_A85+this.Grilla_Z_Z66);
  STD_18_I86:number = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_Z_Z65*this.W_18_A86+this.Grilla_Z_Z66);
  STD_19_I87:number = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_Z_Z65*this.W_19_A87+this.Grilla_Z_Z66);
  STD_20_I88:number = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_Z_Z65*this.W_20_A88+this.Grilla_Z_Z66);
  STD_21_I89:number = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_Z_Z65*this.W_21_A89+this.Grilla_Z_Z66);
  STD_22_I90:number = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_Z_Z65*this.W_22_A90+this.Grilla_Z_Z66);
  STD_23_I91:number = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_Z_Z65*this.W_23_A91+this.Grilla_Z_Z66);
  STD_24_I92:number = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_Z_Z65*this.W_24_A92+this.Grilla_Z_Z66);
  STD_25_I93:number = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_Z_Z65*this.W_25_A93+this.Grilla_Z_Z66);
  STD_26_I94:number = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_Z_Z65*this.W_26_A94+this.Grilla_Z_Z66);
  STD_27_I95:number = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_Z_Z65*this.W_27_A95+this.Grilla_Z_Z66);
  STD_28_I96:number = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_Z_Z65*this.W_28_A96+this.Grilla_Z_Z66);
  STD_29_I97:number = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_Z_Z65*this.W_29_A97+this.Grilla_Z_Z66);
  STD_30_I98:number = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_Z_Z65*this.W_30_A98+this.Grilla_Z_Z66);
  STD_31_I99:number = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_Z_Z65*this.W_31_A99+this.Grilla_Z_Z66);
  STD_32_I100:number = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_Z_Z65*this.W_32_A100+this.Grilla_Z_Z66);
  STD_33_I101:number = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_Z_Z65*this.W_33_A101+this.Grilla_Z_Z66);
  STD_34_I102:number = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_Z_Z65*this.W_34_A102+this.Grilla_Z_Z66);
  STD_35_I103:number = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_Z_Z65*this.W_35_A103+this.Grilla_Z_Z66);
  STD_36_I104:number = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_Z_Z65*this.W_36_A104+this.Grilla_Z_Z66);
  STD_37_I105:number = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_Z_Z65*this.W_37_A105+this.Grilla_Z_Z66);
  STD_38_I106:number = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_Z_Z65*this.W_38_A106+this.Grilla_Z_Z66);
  STD_39_I107:number = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_Z_Z65*this.W_39_A107+this.Grilla_Z_Z66);
  STD_40_I108:number = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_Z_Z65*this.W_40_A108+this.Grilla_Z_Z66);
  STD_41_I109:number = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_Z_Z65*this.W_41_A109+this.Grilla_Z_Z66);

  // formulas Reduced - Columna H
  RED_1_H69:number = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Y_Y65*this.W_1_A69+this.Grilla_Y_Y66);
  RED_2_H70:number = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_Y_Y65*this.W_2_A70+this.Grilla_Y_Y66);
  RED_3_H71:number = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_Y_Y65*this.W_3_A71+this.Grilla_Y_Y66);
  RED_4_H72:number = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_Y_Y65*this.W_4_A72+this.Grilla_Y_Y66);
  RED_5_H73:number = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_Y_Y65*this.W_5_A73+this.Grilla_Y_Y66);
  RED_6_H74:number = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_Y_Y65*this.W_6_A74+this.Grilla_Y_Y66);
  RED_7_H75:number = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_Y_Y65*this.W_7_A75+this.Grilla_Y_Y66);
  RED_8_H76:number = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_Y_Y65*this.W_8_A76+this.Grilla_Y_Y66);
  RED_9_H77:number = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_Y_Y65*this.W_9_A77+this.Grilla_Y_Y66);
  RED_10_H78:number = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_Y_Y65*this.W_10_A78+this.Grilla_Y_Y66);
  RED_11_H79:number = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_Y_Y65*this.W_11_A79+this.Grilla_Y_Y66);
  RED_12_H80:number = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_Y_Y65*this.W_12_A80+this.Grilla_Y_Y66);
  RED_13_H81:number = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_Y_Y65*this.W_13_A81+this.Grilla_Y_Y66);
  RED_14_H82:number = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_Y_Y65*this.W_14_A82+this.Grilla_Y_Y66);
  RED_15_H83:number = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_Y_Y65*this.W_15_A83+this.Grilla_Y_Y66);
  RED_16_H84:number = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_Y_Y65*this.W_16_A84+this.Grilla_Y_Y66);
  RED_17_H85:number = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_Y_Y65*this.W_17_A85+this.Grilla_Y_Y66);
  RED_18_H86:number = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_Y_Y65*this.W_18_A86+this.Grilla_Y_Y66);
  RED_19_H87:number = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_Y_Y65*this.W_19_A87+this.Grilla_Y_Y66);
  RED_20_H88:number = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_Y_Y65*this.W_20_A88+this.Grilla_Y_Y66);
  RED_21_H89:number = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_Y_Y65*this.W_21_A89+this.Grilla_Y_Y66);
  RED_22_H90:number = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_Y_Y65*this.W_22_A90+this.Grilla_Y_Y66);
  RED_23_H91:number = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_Y_Y65*this.W_23_A91+this.Grilla_Y_Y66);
  RED_24_H92:number = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_Y_Y65*this.W_24_A92+this.Grilla_Y_Y66);
  RED_25_H93:number = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_Y_Y65*this.W_25_A93+this.Grilla_Y_Y66);
  RED_26_H94:number = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_Y_Y65*this.W_26_A94+this.Grilla_Y_Y66);
  RED_27_H95:number = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_Y_Y65*this.W_27_A95+this.Grilla_Y_Y66);
  RED_28_H96:number = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_Y_Y65*this.W_28_A96+this.Grilla_Y_Y66);
  RED_29_H97:number = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_Y_Y65*this.W_29_A97+this.Grilla_Y_Y66);
  RED_30_H98:number = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_Y_Y65*this.W_30_A98+this.Grilla_Y_Y66);
  RED_31_H99:number = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_Y_Y65*this.W_31_A99+this.Grilla_Y_Y66);
  RED_32_H100:number = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_Y_Y65*this.W_32_A100+this.Grilla_Y_Y66);
  RED_33_H101:number = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_Y_Y65*this.W_33_A101+this.Grilla_Y_Y66);
  RED_34_H102:number = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_Y_Y65*this.W_34_A102+this.Grilla_Y_Y66);
  RED_35_H103:number = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_Y_Y65*this.W_35_A103+this.Grilla_Y_Y66);
  RED_36_H104:number = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_Y_Y65*this.W_36_A104+this.Grilla_Y_Y66);
  RED_37_H105:number = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_Y_Y65*this.W_37_A105+this.Grilla_Y_Y66);
  RED_38_H106:number = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_Y_Y65*this.W_38_A106+this.Grilla_Y_Y66);
  RED_39_H107:number = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_Y_Y65*this.W_39_A107+this.Grilla_Y_Y66);
  RED_40_H108:number = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_Y_Y65*this.W_40_A108+this.Grilla_Y_Y66);
  RED_41_H109:number = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_Y_Y65*this.W_41_A109+this.Grilla_Y_Y66);

  // formulas Optimus - Columna C
  OPT_1_C69:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_2_C70:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_2_A70*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_3_C71:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_3_A71*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_4_C72:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_4_A72*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_5_C73:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_5_A73*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_6_C74:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_6_A74*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_7_C75:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_7_A75*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_8_C76:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_8_A76*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_9_C77:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_9_A77*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_10_C78:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_10_A78*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_11_C79:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_11_A79*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_12_C80:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_12_A80*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_13_C81:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_13_A81*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_14_C82:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_14_A82*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_15_C83:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_15_A83*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_16_C84:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_16_A84*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_17_C85:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_17_A85*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_18_C86:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_18_A86*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_19_C87:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_19_A87*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_20_C88:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_20_A88*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_21_C89:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_21_A89*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_22_C90:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_22_A90*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_23_C91:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_23_A91*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_24_C92:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_24_A92*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_25_C93:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_25_A93*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_26_C94:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_26_A94*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_27_C95:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_27_A95*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_28_C96:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_28_A96*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_29_C97:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_29_A97*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_30_C98:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_30_A98*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_31_C99:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_31_A99*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_32_C100:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_32_A100*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_33_C101:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_33_A101*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_34_C102:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_34_A102*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_35_C103:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_35_A103*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_36_C104:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_36_A104*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_37_C105:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_37_A105*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_38_C106:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_38_A106*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_39_C107:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_39_A107*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_40_C108:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_40_A108*this.Var_Gs_B55+this.Var_Sopt_B54);
  OPT_41_C109:number = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_41_A109*this.Var_Gs_B55+this.Var_Sopt_B54);



  // Serie A
  A1:number = this.TAR_1_H63;
  A2:number = this.TAR_2_I63;
  A3:number = this.Grilla_Y_Y62;


  // Serie B
  B1:number = this.ZER_1_B69;
  B2:number = this.ZER_2_B70;
  B3:number = this.ZER_3_B71;
  B4:number = this.ZER_4_B72;
  B5:number = this.ZER_5_B73;
  B6:number = this.ZER_6_B74;
  B7:number = this.ZER_7_B75;
  B8:number = this.ZER_8_B76;
  B9:number = this.ZER_9_B77;
  B10:number = this.ZER_10_B78;
  B11:number = this.ZER_11_B79;
  B12:number = this.ZER_12_B80;
  B13:number = this.ZER_13_B81;
  B14:number = this.ZER_14_B82;
  B15:number = this.ZER_15_B83;
  B16:number = this.ZER_16_B84;
  B17:number = this.ZER_17_B85;
  B18:number = this.ZER_18_B86;
  B19:number = this.ZER_19_B87;
  B20:number = this.ZER_20_B88;
  B21:number = this.ZER_21_B89;
  B22:number = this.ZER_22_B90;
  B23:number = this.ZER_23_B91;
  B24:number = this.ZER_24_B92;
  B25:number = this.ZER_25_B93;
  B26:number = this.ZER_26_B94;
  B27:number = this.ZER_27_B95;
  B28:number = this.ZER_28_B96;
  B29:number = this.ZER_29_B97;
  B30:number = this.ZER_30_B98;
  B31:number = this.ZER_31_B99;
  B32:number = this.ZER_32_B100;
  B33:number = this.ZER_33_B101;
  B34:number = this.ZER_34_B102;
  B35:number = this.ZER_35_B103;
  B36:number = this.ZER_36_B104;
  B37:number = this.ZER_37_B105;
  B38:number = this.ZER_38_B106;
  B39:number = this.ZER_39_B107;
  B40:number = this.ZER_40_B108;
  B41:number = this.ZER_41_B109;



  // Serie C
  C1:number = this.MOD_1_J69;
  C2:number = this.MOD_2_J70;
  C3:number = this.MOD_3_J71;
  C4:number = this.MOD_4_J72;
  C5:number = this.MOD_5_J73;
  C6:number = this.MOD_6_J74;
  C7:number = this.MOD_7_J75;
  C8:number = this.MOD_8_J76;
  C9:number = this.MOD_9_J77;
  C10:number = this.MOD_10_J78;
  C11:number = this.MOD_11_J79;
  C12:number = this.MOD_12_J80;
  C13:number = this.MOD_13_J81;
  C14:number = this.MOD_14_J82;
  C15:number = this.MOD_15_J83;
  C16:number = this.MOD_16_J84;
  C17:number = this.MOD_17_J85;
  C18:number = this.MOD_18_J86;
  C19:number = this.MOD_19_J87;
  C20:number = this.MOD_20_J88;
  C21:number = this.MOD_21_J89;
  C22:number = this.MOD_22_J90;
  C23:number = this.MOD_23_J91;
  C24:number = this.MOD_24_J92;
  C25:number = this.MOD_25_J93;
  C26:number = this.MOD_26_J94;
  C27:number = this.MOD_27_J95;
  C28:number = this.MOD_28_J96;
  C29:number = this.MOD_29_J97;
  C30:number = this.MOD_30_J98;
  C31:number = this.MOD_31_J99;
  C32:number = this.MOD_32_J100;
  C33:number = this.MOD_33_J101;
  C34:number = this.MOD_34_J102;
  C35:number = this.MOD_35_J103;
  C36:number = this.MOD_36_J104;
  C37:number = this.MOD_37_J105;
  C38:number = this.MOD_38_J106;
  C39:number = this.MOD_39_J107;
  C40:number = this.MOD_40_J108;
  C41:number = this.MOD_41_J109;


  // Serie D
  D1:number = this.STD_1_I69;
  D2:number = this.STD_2_I70;
  D3:number = this.STD_3_I71;
  D4:number = this.STD_4_I72;
  D5:number = this.STD_5_I73;
  D6:number = this.STD_6_I74;
  D7:number = this.STD_7_I75;
  D8:number = this.STD_8_I76;
  D9:number = this.STD_9_I77;
  D10:number = this.STD_10_I78;
  D11:number = this.STD_11_I79;
  D12:number = this.STD_12_I80;
  D13:number = this.STD_13_I81;
  D14:number = this.STD_14_I82;
  D15:number = this.STD_15_I83;
  D16:number = this.STD_16_I84;
  D17:number = this.STD_17_I85;
  D18:number = this.STD_18_I86;
  D19:number = this.STD_19_I87;
  D20:number = this.STD_20_I88;
  D21:number = this.STD_21_I89;
  D22:number = this.STD_22_I90;
  D23:number = this.STD_23_I91;
  D24:number = this.STD_24_I92;
  D25:number = this.STD_25_I93;
  D26:number = this.STD_26_I94;
  D27:number = this.STD_27_I95;
  D28:number = this.STD_28_I96;
  D29:number = this.STD_29_I97;
  D30:number = this.STD_30_I98;
  D31:number = this.STD_31_I99;
  D32:number = this.STD_32_I100;
  D33:number = this.STD_33_I101;
  D34:number = this.STD_34_I102;
  D35:number = this.STD_35_I103;
  D36:number = this.STD_36_I104;
  D37:number = this.STD_37_I105;
  D38:number = this.STD_38_I106;
  D39:number = this.STD_39_I107;
  D40:number = this.STD_40_I108;
  D41:number = this.STD_41_I109;



  // Serie E
  E1:number = this.RED_1_H69;
  E2:number = this.RED_2_H70;
  E3:number = this.RED_3_H71;
  E4:number = this.RED_4_H72;
  E5:number = this.RED_5_H73;
  E6:number = this.RED_6_H74;
  E7:number = this.RED_7_H75;
  E8:number = this.RED_8_H76;
  E9:number = this.RED_9_H77;
  E10:number = this.RED_10_H78;
  E11:number = this.RED_11_H79;
  E12:number = this.RED_12_H80;
  E13:number = this.RED_13_H81;
  E14:number = this.RED_14_H82;
  E15:number = this.RED_15_H83;
  E16:number = this.RED_16_H84;
  E17:number = this.RED_17_H85;
  E18:number = this.RED_18_H86;
  E19:number = this.RED_19_H87;
  E20:number = this.RED_20_H88;
  E21:number = this.RED_21_H89;
  E22:number = this.RED_22_H90;
  E23:number = this.RED_23_H91;
  E24:number = this.RED_24_H92;
  E25:number = this.RED_25_H93;
  E26:number = this.RED_26_H94;
  E27:number = this.RED_27_H95;
  E28:number = this.RED_28_H96;
  E29:number = this.RED_29_H97;
  E30:number = this.RED_30_H98;
  E31:number = this.RED_31_H99;
  E32:number = this.RED_32_H100;
  E33:number = this.RED_33_H101;
  E34:number = this.RED_34_H102;
  E35:number = this.RED_35_H103;
  E36:number = this.RED_36_H104;
  E37:number = this.RED_37_H105;
  E38:number = this.RED_38_H106;
  E39:number = this.RED_39_H107;
  E40:number = this.RED_40_H108;
  E41:number = this.RED_41_H109;


  // Serie F
  F1:number = this.OPT_1_C69;
  F2:number = this.OPT_2_C70;
  F3:number = this.OPT_3_C71;
  F4:number = this.OPT_4_C72;
  F5:number = this.OPT_5_C73;
  F6:number = this.OPT_6_C74;
  F7:number = this.OPT_7_C75;
  F8:number = this.OPT_8_C76;
  F9:number = this.OPT_9_C77;
  F10:number = this.OPT_10_C78;
  F11:number = this.OPT_11_C79;
  F12:number = this.OPT_12_C80;
  F13:number = this.OPT_13_C81;
  F14:number = this.OPT_14_C82;
  F15:number = this.OPT_15_C83;
  F16:number = this.OPT_16_C84;
  F17:number = this.OPT_17_C85;
  F18:number = this.OPT_18_C86;
  F19:number = this.OPT_19_C87;
  F20:number = this.OPT_20_C88;
  F21:number = this.OPT_21_C89;
  F22:number = this.OPT_22_C90;
  F23:number = this.OPT_23_C91;
  F24:number = this.OPT_24_C92;
  F25:number = this.OPT_25_C93;
  F26:number = this.OPT_26_C94;
  F27:number = this.OPT_27_C95;
  F28:number = this.OPT_28_C96;
  F29:number = this.OPT_29_C97;
  F30:number = this.OPT_30_C98;
  F31:number = this.OPT_31_C99;
  F32:number = this.OPT_32_C100;
  F33:number = this.OPT_33_C101;
  F34:number = this.OPT_34_C102;
  F35:number = this.OPT_35_C103;
  F36:number = this.OPT_36_C104;
  F37:number = this.OPT_37_C105;
  F38:number = this.OPT_38_C106;
  F39:number = this.OPT_39_C107;
  F40:number = this.OPT_40_C108;
  F41:number = this.OPT_41_C109;



  // lineChart
   public lineChartData:Array<any> = [
     {data: [this.A1,this.A2], label: 'Field Target'},
     {data: [this.B1,this.B2,this.B3,this.B4,this.B5,this.B6,this.B7,this.B8,this.B9,this.B10,this.B11,this.B12,this.B13,this.B14,this.B15,this.B16,this.B17,this.B18,this.B19,this.B20,this.B21,this.B22,this.B23,this.B24,this.B25,this.B26,this.B27,this.B28,this.B29,this.B30,this.B31,this.B32,this.B33,this.B34,this.B35,this.B36,this.B37,this.B38,this.B39,this.B40,this.B41], label: 'Zero Air Voids'},
     {data: [this.C1,this.C2,this.C3,this.C4,this.C5,this.C6,this.C7,this.C8,this.C9,this.C10,this.C11,this.C12,this.C13,this.C14,this.C15,this.C16,this.C17,this.C18,this.C19,this.C20,this.C21,this.C22,this.C23,this.C24,this.C25,this.C26,this.C27,this.C28,this.C29,this.C30,this.C31,this.C32,this.C33,this.C34,this.C35,this.C36,this.C37,this.C38,this.C39,this.C40,this.C41], label: 'Modifed'},
     {data: [this.D1,this.D2,this.D3,this.D4,this.D5,this.D6,this.D7,this.D8,this.D9,this.D10,this.D11,this.D12,this.D13,this.D14,this.D15,this.D16,this.D17,this.D18,this.D19,this.D20,this.D21,this.D22,this.D23,this.D24,this.D25,this.D26,this.D27,this.D28,this.D29,this.D30,this.D31,this.D32,this.D33,this.D34,this.D35,this.D36,this.D37,this.D38,this.D39,this.D40,this.D41], label: 'Standard'},
     {data: [this.E1,this.E2,this.E3,this.E4,this.E5,this.E6,this.E7,this.E8,this.E9,this.E10,this.E11,this.E12,this.E13,this.E14,this.E15,this.E16,this.E17,this.E18,this.E19,this.E20,this.E21,this.E22,this.E23,this.E24,this.E25,this.E26,this.E27,this.E28,this.E29,this.E30,this.E31,this.E32,this.E33,this.E34,this.E35,this.E36,this.E37,this.E38,this.E39,this.E40,this.E41], label: 'Reduce'},
     {data: [this.F1,this.F2,this.F3,this.F4,this.F5,this.F6,this.F7,this.F8,this.F9,this.F10,this.F11,this.F12,this.F13,this.F14,this.F15,this.F16,this.F17,this.F18,this.F19,this.F20,this.F21,this.F22,this.F23,this.F24,this.F25,this.F26,this.F27,this.F28,this.F29,this.F30,this.F31,this.F32,this.F33,this.F34,this.F35,this.F36,this.F37,this.F38,this.F39,this.F40,this.F41], label: 'Line of Optimus'}
     // ,
     // {data: [this.G1,this.G2,this.G3,this.G4,this.G5,this.G6,this.G7,this.G8,this.G9,this.G10,this.G11,this.G12,this.G13,this.G14,this.G15,this.G16,this.G17,this.G18,this.G19,this.G20,this.G21,this.G22,this.G23,this.G24,this.G25,this.G26,this.G27,this.G28,this.G29,this.G30,this.G31,this.G32,this.G33,this.G34,this.G35,this.G36,this.G37,this.G38,this.G39,this.G40,this.G41], label: 'Water Content (%)'}
   ];

   public lineChartLabels:Array<any> = [
     this.W_1_A69,
     this.W_2_A70,
     this.W_3_A71,
     this.W_4_A72,
     this.W_5_A73,
     this.W_6_A74,
     this.W_7_A75,
     this.W_8_A76,
     this.W_9_A77,
     this.W_10_A78,
     this.W_11_A79,
     this.W_12_A80,
     this.W_13_A81,
     this.W_14_A82,
     this.W_15_A83,
     this.W_16_A84,
     this.W_17_A85,
     this.W_18_A86,
     this.W_19_A87,
     this.W_20_A88,
     this.W_21_A89,
     this.W_22_A90,
     this.W_23_A91,
     this.W_24_A92,
     this.W_25_A93,
     this.W_26_A94,
     this.W_27_A95,
     this.W_28_A96,
     this.W_29_A97,
     this.W_30_A98,
     this.W_31_A99,
     this.W_32_A100,
     this.W_33_A101,
     this.W_34_A102,
     this.W_35_A103,
     this.W_36_A104,
     this.W_37_A105,
     this.W_38_A106,
     this.W_39_A107,
     this.W_40_A108,
     this.W_41_A109,
];

   public lineChartOptions:any = {
       responsive: true
     };

   public lineChartColors:Array<any> = [
     { // A
       backgroundColor: 'rgba(194,0,255,0)',
       borderColor: 'rgba(194,0,255,1)',
       pointBackgroundColor: 'rgba(235,170,255,1)',
       pointBorderColor: '#C200FF',
       pointHoverBackgroundColor: '#C200FF',
       pointHoverBorderColor: 'rgba(194,0,255,0.8)'
     },
     { // B
       backgroundColor: 'rgba(102,0,255,0)',
       borderColor: 'rgba(102,0,255,0.1)',
       pointBackgroundColor: 'rgba(102,204,255,1)',
       pointBorderColor: '#6600FF',
       pointHoverBackgroundColor: '#6600FF',
       pointHoverBorderColor: 'rgba(102,0,255,0.8)'
     },
     { // C
       backgroundColor: 'rgba(255,204,0,0)',
       borderColor: 'rgba(255,153,0,1)',
       pointBackgroundColor: 'rgba(255,255,0,1)',
       pointBorderColor: '#FF9900',
       pointHoverBackgroundColor: '#FF9900',
       pointHoverBorderColor: 'rgba(255,153,0,0.8)'
     },
     { // D
      backgroundColor: 'rgba(0,128,0,0)',
      borderColor: 'rgba(0,153,0,1)',
      pointBackgroundColor: 'rgba(0,255,0,1)',
      pointBorderColor: '#009900',
      pointHoverBackgroundColor: '#009900',
      pointHoverBorderColor: 'rgba(0,153,0,0.8)'
    },
     { // E
       backgroundColor: 'rgba(255,69,0,0)',
       borderColor: 'rgba(255,69,0,1)',
       pointBackgroundColor: 'rgba(255,204,204,1)',
       pointBorderColor: '#FF0000',
       pointHoverBackgroundColor: '#FF0000',
       pointHoverBorderColor: 'rgba(255,69,0,0.8)'
     },
     { // F
       backgroundColor: 'rgba(96,96,96,0)',
       borderColor: 'rgba(96,96,96,0.1)',
       pointBackgroundColor: 'rgba(220,220,220,1)',
       pointBorderColor: '#606060',
       pointHoverBackgroundColor: '#606060',
       pointHoverBorderColor: 'rgba(96,96,96,0.8)'
     },
   ];

   public lineChartLegend:boolean = true;
   public lineChartType:string = 'line';


 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }


}
