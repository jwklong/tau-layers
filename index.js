(()=>{"use strict";var t=function(){function t(t){this.unlocked=!1,this.visible=!1,this.name=t.name,this.tooltip=t.tooltip,this.visibility=t.visibility,this.unlock=t.unlock,this.color=t.color,this.element=document.createElement("div"),this.element.classList.add("achievement"),this.element.style.setProperty("--primary-color","var(--color-".concat(this.color,"-0)")),this.element.style.setProperty("--secondary-color","var(--color-".concat(this.color,"-3)"));var e=document.createElement("div");e.classList.add("tooltip"),e.innerText=this.name.bold()+"<br>"+this.tooltip,this.element.appendChild(e)}return t.prototype.tick=function(){this.visible||!this.visibility()&&!this.unlock()||(this.visible=!0,this.element.classList.add("show")),!this.unlocked&&this.unlock()&&(this.unlocked=!0,this.element.classList.add("unlocked"))},t.prototype.attachElement=function(t){t.appendChild(this.element)},t}(),e=Array(7).fill(Array(5).fill(new t({name:"",tooltip:"",visibility:function(){return!1},unlock:function(){return!1},color:"blue"})));e[0][3]=new t({name:"Getting Started",tooltip:"Start the game.",visibility:function(){return!0},unlock:function(){return!0},color:"green"});for(var i=document.querySelector(".content7"),n=0,o=e;n<o.length;n++){var l=o[n],s=document.createElement("div");s.classList.add("achrow");for(var r=0,c=l;r<c.length;r++)c[r].attachElement(s);null==i||i.appendChild(s)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Im1CQUFBLGlCQVlJLFdBQVlBLEdBTFosS0FBQUMsVUFBb0IsRUFDcEIsS0FBQUMsU0FBbUIsRUFXZkMsS0FBS0MsS0FBT0osRUFBS0ksS0FDakJELEtBQUtFLFFBQVVMLEVBQUtLLFFBQ3BCRixLQUFLRyxXQUFhTixFQUFLTSxXQUN2QkgsS0FBS0ksT0FBU1AsRUFBS08sT0FDbkJKLEtBQUtLLE1BQVFSLEVBQUtRLE1BR2xCTCxLQUFLTSxRQUFVQyxTQUFTQyxjQUFjLE9BQ3RDUixLQUFLTSxRQUFRRyxVQUFVQyxJQUFJLGVBRzNCVixLQUFLTSxRQUFRSyxNQUFNQyxZQUFZLGtCQUFrQixzQkFBZVosS0FBS0ssTUFBSyxRQUMxRUwsS0FBS00sUUFBUUssTUFBTUMsWUFBWSxvQkFBb0Isc0JBQWVaLEtBQUtLLE1BQUssUUFFNUUsSUFBTVEsRUFBaUJOLFNBQVNDLGNBQWMsT0FDOUNLLEVBQWVKLFVBQVVDLElBQUksV0FDN0JHLEVBQWVDLFVBQVlkLEtBQUtDLEtBQUtjLE9BQVMsT0FBU2YsS0FBS0UsUUFDNURGLEtBQUtNLFFBQVFVLFlBQVlILEVBQzdCLENBY0osT0FaSSxZQUFBSSxLQUFBLFdBQ1NqQixLQUFLRCxVQUFZQyxLQUFLRyxlQUFnQkgsS0FBS0ksV0FDNUNKLEtBQUtELFNBQVUsRUFDZkMsS0FBS00sUUFBUUcsVUFBVUMsSUFBSSxVQUUxQlYsS0FBS0YsVUFBWUUsS0FBS0ksV0FDdkJKLEtBQUtGLFVBQVcsRUFDaEJFLEtBQUtNLFFBQVFHLFVBQVVDLElBQUksWUFFbkMsRUFFQSxZQUFBUSxjQUFBLFNBQWNDLEdBQXVCQSxFQUFPSCxZQUFZaEIsS0FBS00sUUFBUyxFQUMxRSxFQW5EQSxHQ0tNYyxFQUFnQ0MsTUFBTSxHQUFHQyxLQUFLRCxNQUFNLEdBQUdDLEtBQUssSUFBSUMsRUFBWSxDQUM5RXRCLEtBQU0sR0FDTkMsUUFBUyxHQUNUQyxXQUFZLFdBQU0sVUFDbEJDLE9BQVEsV0FBTSxVQUNkQyxNQUFPLFdBSVBlLEVBQWEsR0FBRyxHQUFLLElBQUlHLEVBQVksQ0FDakN0QixLQUFNLGtCQUNOQyxRQUFTLGtCQUNUQyxXQUFZLFdBQU0sVUFDbEJDLE9BQVEsV0FBTSxVQUNkQyxNQUFPLFVBS2YsSUFGQSxJQUFNbUIsRUFBcUJqQixTQUFTa0IsY0FBYyxhQUUvQixNQUFBTCxFQUFBLGVBQWMsQ0FBNUIsSUFBSU0sRUFBTSxLQUNQQyxFQUFnQnBCLFNBQVNDLGNBQWMsT0FDM0NtQixFQUFjbEIsVUFBVUMsSUFBSSxVQUM1QixJQUF3QixVQUFBZ0IsRUFBQSxlQUFKLEtBQ0pSLGNBQWNTLEdBRTlCSCxTQUFBQSxFQUFvQlIsWUFBWVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhdS1sYXllcnMvLi9zcmMvY2xhc3Nlcy9hY2hpZXZlbWVudHMudHMiLCJ3ZWJwYWNrOi8vdGF1LWxheWVycy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWNoaWV2ZW1lbnQge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHRvb2x0aXA6IHN0cmluZ1xuICAgIHZpc2liaWxpdHk6ICgpID0+IGJvb2xlYW5cbiAgICB1bmxvY2s6ICgpID0+IGJvb2xlYW5cbiAgICBjb2xvcjogc3RyaW5nXG5cbiAgICB1bmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBlbGVtZW50OiBIVE1MRGl2RWxlbWVudFxuXG4gICAgY29uc3RydWN0b3IoYXJnczoge1xuICAgICAgICBuYW1lOiBzdHJpbmdcbiAgICAgICAgdG9vbHRpcDogc3RyaW5nXG4gICAgICAgIHZpc2liaWxpdHk6ICgpID0+IGJvb2xlYW5cbiAgICAgICAgdW5sb2NrOiAoKSA9PiBib29sZWFuXG4gICAgICAgIGNvbG9yOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGFyZ3MubmFtZVxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBhcmdzLnRvb2x0aXBcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gYXJncy52aXNpYmlsaXR5XG4gICAgICAgIHRoaXMudW5sb2NrID0gYXJncy51bmxvY2tcbiAgICAgICAgdGhpcy5jb2xvciA9IGFyZ3MuY29sb3JcblxuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY2hpZXZlbWVudCcpXG4gICAgICAgIC8vIFRPRE8gOiBhZGQgYWNoIGljb25cblxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeS1jb2xvcicsYHZhcigtLWNvbG9yLSR7dGhpcy5jb2xvcn0tMClgKVxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Vjb25kYXJ5LWNvbG9yJyxgdmFyKC0tY29sb3ItJHt0aGlzLmNvbG9yfS0zKWApXG5cbiAgICAgICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJylcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5uYW1lLmJvbGQoKSArICc8YnI+JyArIHRoaXMudG9vbHRpcFxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodG9vbHRpcEVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUgJiYgKHRoaXMudmlzaWJpbGl0eSgpIHx8IHRoaXMudW5sb2NrKCkpKSB7IC8vc2hvd3Mgd2hlbiB1bmxvY2tlZCBhcyB3ZWxsLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMudW5sb2NrZWQgJiYgdGhpcy51bmxvY2soKSkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd1bmxvY2tlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2hFbGVtZW50KHBhcmVudDogSFRNTEVsZW1lbnQpIHsgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCkgfVxufSIsImltcG9ydCBEZWNpbWFsIGZyb20gJy4vbW9kdWxlcy9icmVha19ldGVybml0eS5qcycgLy8gdG8gdXNlIGxhdGVyXG5pbXBvcnQgeyBBY2hpZXZlbWVudCB9IGZyb20gJy4vY2xhc3Nlcy9hY2hpZXZlbWVudHMnXG5cbi8vYWNoaWV2ZW1lbnRzXG5cbmNvbnN0IGFjaGlldmVtZW50czogQWNoaWV2ZW1lbnRbXVtdID0gQXJyYXkoNykuZmlsbChBcnJheSg1KS5maWxsKG5ldyBBY2hpZXZlbWVudCh7XG4gICAgbmFtZTogXCJcIixcbiAgICB0b29sdGlwOiBcIlwiLFxuICAgIHZpc2liaWxpdHk6ICgpID0+IGZhbHNlLFxuICAgIHVubG9jazogKCkgPT4gZmFsc2UsXG4gICAgY29sb3I6IFwiYmx1ZVwiXG59KSkpXG5cbi8vcm93IDFcbiAgICBhY2hpZXZlbWVudHNbMF1bM10gPSBuZXcgQWNoaWV2ZW1lbnQoe1xuICAgICAgICBuYW1lOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgICAgICB0b29sdGlwOiBcIlN0YXJ0IHRoZSBnYW1lLlwiLFxuICAgICAgICB2aXNpYmlsaXR5OiAoKSA9PiB0cnVlLFxuICAgICAgICB1bmxvY2s6ICgpID0+IHRydWUsXG4gICAgICAgIGNvbG9yOiBcImdyZWVuXCJcbiAgICB9KVxuXG5jb25zdCBhY2hpZXZlbWVudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudDcnKVxuXG5mb3IgKGxldCBhY2hSb3cgb2YgYWNoaWV2ZW1lbnRzKSB7XG4gICAgbGV0IGFjaFJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFjaFJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWNocm93JylcbiAgICBmb3IgKGxldCBhY2hpZXZlbWVudCBvZiBhY2hSb3cpIHtcbiAgICAgICAgYWNoaWV2ZW1lbnQuYXR0YWNoRWxlbWVudChhY2hSb3dFbGVtZW50KVxuICAgIH1cbiAgICBhY2hpZXZlbWVudENvbnRlbnQ/LmFwcGVuZENoaWxkKGFjaFJvd0VsZW1lbnQpXG59XG5cbiJdLCJuYW1lcyI6WyJhcmdzIiwidW5sb2NrZWQiLCJ2aXNpYmxlIiwidGhpcyIsIm5hbWUiLCJ0b29sdGlwIiwidmlzaWJpbGl0eSIsInVubG9jayIsImNvbG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0b29sdGlwRWxlbWVudCIsImlubmVyVGV4dCIsImJvbGQiLCJhcHBlbmRDaGlsZCIsInRpY2siLCJhdHRhY2hFbGVtZW50IiwicGFyZW50IiwiYWNoaWV2ZW1lbnRzIiwiQXJyYXkiLCJmaWxsIiwiQWNoaWV2ZW1lbnQiLCJhY2hpZXZlbWVudENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWNoUm93IiwiYWNoUm93RWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=