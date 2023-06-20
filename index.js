(()=>{"use strict";var t=function(){function t(t){this.unlocked=!1,this.visible=!1,this.name=t.name,this.tooltip=t.tooltip,this.visibility=t.visibility,this.unlock=t.unlock,this.color=t.color,this.element=document.createElement("div"),this.element.classList.add("achievement"),this.element.style.setProperty("--primary-color","var(--color-".concat(this.color,"-0)")),this.element.style.setProperty("--secondary-color","var(--color-".concat(this.color,"-3)"));var e=document.createElement("div");e.classList.add("tooltip"),e.innerText=this.name.bold()+"<br>"+this.tooltip,this.element.appendChild(e)}return t.prototype.tick=function(){this.visible||!this.visibility()&&!this.unlock()||(this.visible=!0,this.element.classList.add("show")),!this.unlocked&&this.unlock()&&(this.unlocked=!0,this.element.classList.add("unlocked"))},t.prototype.attachElement=function(t){t.appendChild(this.element)},t}(),e=Array(5).fill(Array(7).fill(void 0));for(var i in e)for(var o in e[i])e[i][o]=new t({name:"",tooltip:"",visibility:function(){return!1},unlock:function(){return!1},color:"blue"});e[0][3]=new t({name:"Getting Started",tooltip:"Start the game.",visibility:function(){return!0},unlock:function(){return!0},color:"green"}),console.log(e);for(var n=document.querySelector(".content7"),l=0,r=e;l<r.length;l++){var s=r[l];console.log(s);var c=document.createElement("div");c.classList.add("achrow");for(var a=0,h=s;a<h.length;a++){var u=h[a];null==u||u.attachElement(c)}console.log(c),null==n||n.appendChild(c)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Im1CQUFBLGlCQVlJLFdBQVlBLEdBTFosS0FBQUMsVUFBb0IsRUFDcEIsS0FBQUMsU0FBbUIsRUFXZkMsS0FBS0MsS0FBT0osRUFBS0ksS0FDakJELEtBQUtFLFFBQVVMLEVBQUtLLFFBQ3BCRixLQUFLRyxXQUFhTixFQUFLTSxXQUN2QkgsS0FBS0ksT0FBU1AsRUFBS08sT0FDbkJKLEtBQUtLLE1BQVFSLEVBQUtRLE1BR2xCTCxLQUFLTSxRQUFVQyxTQUFTQyxjQUFjLE9BQ3RDUixLQUFLTSxRQUFRRyxVQUFVQyxJQUFJLGVBRzNCVixLQUFLTSxRQUFRSyxNQUFNQyxZQUFZLGtCQUFrQixzQkFBZVosS0FBS0ssTUFBSyxRQUMxRUwsS0FBS00sUUFBUUssTUFBTUMsWUFBWSxvQkFBb0Isc0JBQWVaLEtBQUtLLE1BQUssUUFFNUUsSUFBTVEsRUFBaUJOLFNBQVNDLGNBQWMsT0FDOUNLLEVBQWVKLFVBQVVDLElBQUksV0FDN0JHLEVBQWVDLFVBQVlkLEtBQUtDLEtBQUtjLE9BQVMsT0FBU2YsS0FBS0UsUUFDNURGLEtBQUtNLFFBQVFVLFlBQVlILEVBQzdCLENBY0osT0FaSSxZQUFBSSxLQUFBLFdBQ1NqQixLQUFLRCxVQUFZQyxLQUFLRyxlQUFnQkgsS0FBS0ksV0FDNUNKLEtBQUtELFNBQVUsRUFDZkMsS0FBS00sUUFBUUcsVUFBVUMsSUFBSSxVQUUxQlYsS0FBS0YsVUFBWUUsS0FBS0ksV0FDdkJKLEtBQUtGLFVBQVcsRUFDaEJFLEtBQUtNLFFBQVFHLFVBQVVDLElBQUksWUFFbkMsRUFFQSxZQUFBUSxjQUFBLFNBQWNDLEdBQXVCQSxFQUFPSCxZQUFZaEIsS0FBS00sUUFBUyxFQUMxRSxFQW5EQSxHQ0tNYyxFQUE4Q0MsTUFBTSxHQUFHQyxLQUFLRCxNQUFNLEdBQUdDLFVBQUtDLElBRWhGLElBQUssSUFBSSxLQUFVSCxFQUNmLElBQUssSUFBSSxLQUFlQSxFQUFhLEdBQ2pDQSxFQUFhLEdBQVEsR0FBZSxJQUFJSSxFQUFZLENBQ2hEdkIsS0FBTSxHQUNOQyxRQUFTLEdBQ1RDLFdBQVksV0FBTSxVQUNsQkMsT0FBUSxXQUFNLFVBQ2RDLE1BQU8sU0FNZmUsRUFBYSxHQUFHLEdBQUssSUFBSUksRUFBWSxDQUNqQ3ZCLEtBQU0sa0JBQ05DLFFBQVMsa0JBQ1RDLFdBQVksV0FBTSxVQUNsQkMsT0FBUSxXQUFNLFVBQ2RDLE1BQU8sVUFHZm9CLFFBQVFDLElBQUlOLEdBSVosSUFGQSxJQUFNTyxFQUFxQnBCLFNBQVNxQixjQUFjLGFBRS9CLE1BQUFSLEVBQUEsZUFBYyxDQUE1QixJQUFJUyxFQUFNLEtBQ1hKLFFBQVFDLElBQUlHLEdBQ1osSUFBSUMsRUFBZ0J2QixTQUFTQyxjQUFjLE9BQzNDc0IsRUFBY3JCLFVBQVVDLElBQUksVUFDNUIsSUFBd0IsVUFBQW1CLEVBQUEsZUFBUSxDQUEzQixJQUFJRSxFQUFXLEtBQ2hCQSxTQUFBQSxFQUFhYixjQUFjWSxFLENBRS9CTCxRQUFRQyxJQUFJSSxHQUNaSCxTQUFBQSxFQUFvQlgsWUFBWWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhdS1sYXllcnMvLi9zcmMvY2xhc3Nlcy9hY2hpZXZlbWVudHMudHMiLCJ3ZWJwYWNrOi8vdGF1LWxheWVycy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWNoaWV2ZW1lbnQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHRvb2x0aXA6IHN0cmluZ1xuICAgIHZpc2liaWxpdHk6ICgpID0+IGJvb2xlYW5cbiAgICB1bmxvY2s6ICgpID0+IGJvb2xlYW5cbiAgICBjb2xvcjogc3RyaW5nXG5cbiAgICB1bmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBlbGVtZW50OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IoYXJnczoge1xuICAgICAgICBuYW1lOiBzdHJpbmdcbiAgICAgICAgdG9vbHRpcDogc3RyaW5nXG4gICAgICAgIHZpc2liaWxpdHk6ICgpID0+IGJvb2xlYW5cbiAgICAgICAgdW5sb2NrOiAoKSA9PiBib29sZWFuXG4gICAgICAgIGNvbG9yOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGFyZ3MubmFtZVxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBhcmdzLnRvb2x0aXBcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gYXJncy52aXNpYmlsaXR5XG4gICAgICAgIHRoaXMudW5sb2NrID0gYXJncy51bmxvY2tcbiAgICAgICAgdGhpcy5jb2xvciA9IGFyZ3MuY29sb3JcblxuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY2hpZXZlbWVudCcpXG4gICAgICAgIC8vIFRPRE8gOiBhZGQgYWNoIGljb25cblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1jb2xvcicsYHZhcigtLWNvbG9yLSR7dGhpcy5jb2xvcn0tMClgKVxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Vjb25kYXJ5LWNvbG9yJyxgdmFyKC0tY29sb3ItJHt0aGlzLmNvbG9yfS0zKWApXG5cbiAgICAgICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJylcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lLmJvbGQoKSArICc8YnI+JyArIHRoaXMudG9vbHRpcFxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodG9vbHRpcEVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUgJiYgKHRoaXMudmlzaWJpbGl0eSgpIHx8IHRoaXMudW5sb2NrKCkpKSB7IC8vc2hvd3Mgd2hlbiB1bmxvY2tlZCBhcyB3ZWxsLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMudW5sb2NrZWQgJiYgdGhpcy51bmxvY2soKSkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1bmxvY2tlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hFbGVtZW50KHBhcmVudDogSFRNTEVsZW1lbnQpIHsgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCkgfVxufSIsImltcG9ydCBEZWNpbWFsIGZyb20gJy4vbW9kdWxlcy9icmVha19ldGVybml0eS5qcycgLy8gdG8gdXNlIGxhdGVyXG5pbXBvcnQgeyBBY2hpZXZlbWVudCB9IGZyb20gJy4vY2xhc3Nlcy9hY2hpZXZlbWVudHMnXG5cbi8vYWNoaWV2ZW1lbnRzXG5cbmNvbnN0IGFjaGlldmVtZW50czogKEFjaGlldmVtZW50IHwgdW5kZWZpbmVkKVtdW10gPSBBcnJheSg1KS5maWxsKEFycmF5KDcpLmZpbGwodW5kZWZpbmVkKSlcblxuZm9yIChsZXQgYWNoUm93IGluIGFjaGlldmVtZW50cykge1xuICAgIGZvciAobGV0IGFjaGlldmVtZW50IGluIGFjaGlldmVtZW50c1thY2hSb3ddKSB7XG4gICAgICAgIGFjaGlldmVtZW50c1thY2hSb3ddW2FjaGlldmVtZW50XSA9IG5ldyBBY2hpZXZlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCJcIixcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICgpID0+IGZhbHNlLFxuICAgICAgICAgICAgdW5sb2NrOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIlxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy9yb3cgMVxuICAgIGFjaGlldmVtZW50c1swXVszXSA9IG5ldyBBY2hpZXZlbWVudCh7XG4gICAgICAgIG5hbWU6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgICAgIHRvb2x0aXA6IFwiU3RhcnQgdGhlIGdhbWUuXCIsXG4gICAgICAgIHZpc2liaWxpdHk6ICgpID0+IHRydWUsXG4gICAgICAgIHVubG9jazogKCkgPT4gdHJ1ZSxcbiAgICAgICAgY29sb3I6IFwiZ3JlZW5cIlxuICAgIH0pXG5cbmNvbnNvbGUubG9nKGFjaGlldmVtZW50cylcblxuY29uc3QgYWNoaWV2ZW1lbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQ3JylcblxuZm9yICh2YXIgYWNoUm93IG9mIGFjaGlldmVtZW50cykge1xuICAgIGNvbnNvbGUubG9nKGFjaFJvdylcbiAgICB2YXIgYWNoUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWNoUm93RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY2hyb3cnKVxuICAgIGZvciAodmFyIGFjaGlldmVtZW50IG9mIGFjaFJvdykge1xuICAgICAgICBhY2hpZXZlbWVudD8uYXR0YWNoRWxlbWVudChhY2hSb3dFbGVtZW50KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhY2hSb3dFbGVtZW50KVxuICAgIGFjaGlldmVtZW50Q29udGVudD8uYXBwZW5kQ2hpbGQoYWNoUm93RWxlbWVudClcbn1cblxuIl0sIm5hbWVzIjpbImFyZ3MiLCJ1bmxvY2tlZCIsInZpc2libGUiLCJ0aGlzIiwibmFtZSIsInRvb2x0aXAiLCJ2aXNpYmlsaXR5IiwidW5sb2NrIiwiY29sb3IiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRvb2x0aXBFbGVtZW50IiwiaW5uZXJUZXh0IiwiYm9sZCIsImFwcGVuZENoaWxkIiwidGljayIsImF0dGFjaEVsZW1lbnQiLCJwYXJlbnQiLCJhY2hpZXZlbWVudHMiLCJBcnJheSIsImZpbGwiLCJ1bmRlZmluZWQiLCJBY2hpZXZlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJhY2hpZXZlbWVudENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWNoUm93IiwiYWNoUm93RWxlbWVudCIsImFjaGlldmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==