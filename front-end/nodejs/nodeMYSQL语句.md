## nodeMYSQL语句

> 插入
>
> > ```sql
> > INSERT INTO 表名字 VALUES (值列表)
> > INSERT INTO (部分字段) VALUES (值列表)
> > ```
> >
> >  
>
> 查询
>
> > ```sql
> > SELECT * FROM 表名
> > SELECT `password` FROM 表名 WHERE id = '3'
> > ```
> >
> >  
>
> 修改
>
> > ```sql
> > UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
> > 
> > UPDATE `customer` SET c_name = '赵四' , c_pwd = '1234678' , c_phone = '1306148', discount = 0.7 WHERE c_no = 3;
> > /*
> > 	注意是用,连接而不是用AND
> > */
> > ```
> >
> > 
>
> 删除
>
> > ```sql
> > DELETE FROM 表名称 WHERE 列名称 = 值
> > ```
> >
> >  
>
> ORDER BY
>
> > ORDER BY 语句用于根据指定的列对结果集进行排序。
> > ORDER BY 语句默认按照升序对记录进行排序
> > 如果您希望按照降序对记录进行排序，可以使用 DESC 关键字
> >
> > ```sql
> > SELECT Company, OrderNumber FROM Orders ORDER BY Company
> > ```
> >
> >  
>
> AND 和 OR 运算符
>
> > AND 和 OR 可在 WHERE 子语句中把两个或多个条件结合起来。
> > 如果第一个条件和第二个条件都成立，则 AND 运算符显示一条记录。
> > 如果第一个条件和第二个条件中只要有一个成立，则 OR 运算符显示一条记录。
> >
> > ```sql
> > SELECT * FROM Persons WHERE FirstName='Thomas' AND LastName='Carter'
> > ```
> >
> >  
>
> GROUP BY
>
> > GROUP BY 语句用于结合合计函数，根据一个或多个列对结果集进行分组。
> >
> > ```sql
> > SELECT Customer,SUM(OrderPrice) FROM Orders GROUP BY Customer
> > ```
> >
> >  
>
> 一些方法
>
> > ```sql
> > AVG() 平均数
> > SUM（） 和
> > COUNT() 返回指定列的值的数目
> >     SELECT COUNT(Customer) AS CustomerNilsen FROM Orders WHERE Customer='Carter'
> > ```
> >
> > 

## 注意

> ### nodejs操作数据库语句时不要忘记了转义符！！
>
> > ```javascript
> > var update = 'UPDATE `customer` SET c_name = \''+name+'\' , c_pwd = \''+pwd+'\' , c_phone = \''+phone+'\', discount = \''+discount+'\' WHERE c_no = \''+id+'\'';
> > ```
> >
> > 