const controller = {};
const avion = require('../models/avion')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aviones', (err, aviones) => {
                if(err){
                    res.json(err);
                }
               
                res.render('aviones', {
                    data: aviones
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { fabricante,modelo,vel_max,vel_crucero,cant_asi_eco,cant_asi_pri,peso_vacio,peso_max,carga_max_equip,carga_max_cabina,pilotos_nece,
        tipo_combus,cant_combus,cant_banos,cant_salidas_emer,equip_medi,dist_depegue_crgmax,estado,id_mantenimiento,precio_dist_recorrida, idproveedor } = data;
        
        
        
        if(precio_dist_recorrida == ""){
            precio_dist_recorrida = null;
        }
        if(idproveedor == ""){
            idproveedor = null;
        }
        if(id_mantenimiento == ""){
            id_mantenimiento = null;
        }
        if(estado==""){
            estado= null;
        }

    avion.create({
        fabricante,modelo,vel_max,vel_crucero,cant_asi_eco,cant_asi_pri,peso_vacio,peso_max,carga_max_equip,carga_max_cabina,pilotos_nece,
        tipo_combus,cant_combus,cant_banos,cant_salidas_emer,equip_medi,dist_depegue_crgmax,estado,id_mantenimiento,precio_dist_recorrida, idproveedor
    })
    .then(aviones => res.redirect('/aviones'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idavion }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM aviones WHERE idavion = ?',[idavion], (err,rows) => {
            res.redirect('/aviones');
        });
    })
};


controller.edit  = (req, res) => {
    const { idavion }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aviones WHERE idavion = ?',[idavion], (err, aviones) =>{
            res.render('aviones_edit', {
                data :aviones[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idavion }= req.params;
    if(req.body.idproveedor == ""){
        req.body.idproveedor = null;
    }

    if(req.body.precio_dist_recorrida == ""){
        req.body.precio_dist_recorrida = null;
    }

    if(req.body.id_mantenimiento == ""){
        req.body.id_mantenimiento= null;
    }

    if(    req.body.estado == ""){
        req.body.estado= null;
    }


    avion.update(
        { fabricante:req.body.fabricante,modelo:req.body.modelo,vel_max:req.body.vel_max,vel_crucero:req.body.vel_crucero,cant_asi_eco:req.body.cant_asi_eco,cant_asi_pri:req.body.cant_asi_pri,peso_vacio:req.body.peso_vacio,peso_max:req.body.peso_max,carga_max_equip:req.body.carga_max_equip,carga_max_cabina:req.body.carga_max_cabina,pilotos_nece:req.body.pilotos_nece,
            tipo_combus:req.body.tipo_combus,cant_combus:req.body.cant_combus,cant_banos:req.body.cant_banos,cant_salidas_emer:req.body.cant_salidas_emer,equip_medi:req.body.equip_medi,dist_depegue_crgmax:req.body.dist_depegue_crgmax,estado:req.body.estado,id_mantenimiento:req.body.id_mantenimiento,precio_dist_recorrida:req.body.precio_dist_recorrida, idproveedor:req.body.idproveedor },
        { where: { idavion: [idavion] } }
      )
        .then(result =>
            res.redirect('/aviones'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;