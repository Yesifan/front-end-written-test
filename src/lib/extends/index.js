/**
 * ### 问题描述
 *
 * 实现一个继承函数。返回一个新函数，使新函数同时继承 `Child` 和 `Parent`。
 * 
 */
export default function myExtends(Child, Parent){
  Child.parent = Parent
  return Child
}