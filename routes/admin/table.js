//桌台相关路由器
const express =require("express");
const pool =require("../../pool");
var router=express.Router();
module.exports=router;


/**
 * GET /admin/settings
 * 获取所有的桌台信息
 * 返回数据
 *  {tid:'xx',tname:'xx',status:"xxx"}
 */
router.get("/",(req,res)=>{
    pool.query("SELECT * FROM xfn_table ORDER BY tid",(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
