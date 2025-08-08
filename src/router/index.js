import { createRouter, createWebHistory } from "vue-router";
import {
  HOME,
  ABOUT,
  EXAMPLE,
  EXAMPLE_LONG,
} from "../constants/routeConstants.js";

const HomeView = {
  template: '<div class="h-full px-2"><h1>You are on the Home page</h1></div>',
};
const AboutView = {
  template: `<div class="h-full px-2">
	<h1 >You are on the About page</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend dignissim velit eu semper. Vivamus pharetra lacus nec justo finibus sagittis. Pellentesque maximus id metus nec consequat. Suspendisse ac pellentesque nisl. Aliquam urna enim, elementum vitae eleifend pharetra, egestas nec lectus. Nulla ac risus in ipsum euismod blandit non sit amet lacus. Aenean vitae leo nec urna gravida pretium at in sem. Pellentesque sit amet ex et erat pretium tempor vitae nec dolor. Nunc diam neque, rhoncus at nibh id, molestie tempor velit. Suspendisse fermentum cursus ultrices. Vivamus neque nibh, ullamcorper vel elementum in, congue vel turpis. Curabitur vestibulum tellus id erat imperdiet, eu tempus purus viverra. Cras eu eros a erat cursus consectetur. Aenean consectetur interdum sapien, quis congue nibh maximus pellentesque. Vivamus eu ultrices lorem.</p>
	</div>`,
};
const ExampleView = {
  template: `
	<div class="h-full px-2">
		<h1>You are on the Example page</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend dignissim velit eu semper. Vivamus pharetra lacus nec justo finibus sagittis. Pellentesque maximus id metus nec consequat. Suspendisse ac pellentesque nisl. Aliquam urna enim, elementum vitae eleifend pharetra, egestas nec lectus. Nulla ac risus in ipsum euismod blandit non sit amet lacus. Aenean vitae leo nec urna gravida pretium at in sem. Pellentesque sit amet ex et erat pretium tempor vitae nec dolor. Nunc diam neque, rhoncus at nibh id, molestie tempor velit. Suspendisse fermentum cursus ultrices. Vivamus neque nibh, ullamcorper vel elementum in, congue vel turpis. Curabitur vestibulum tellus id erat imperdiet, eu tempus purus viverra. Cras eu eros a erat cursus consectetur. Aenean consectetur interdum sapien, quis congue nibh maximus pellentesque. Vivamus eu ultrices lorem.</p>
	</div>`,
};
const ExampleLongView = {
  template: `
	<div class="h-full px-2">
		<h1>You are on the Example page</h1>
		<h2>This page has lots of text</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend dignissim velit eu semper. Vivamus pharetra lacus nec justo finibus sagittis. Pellentesque maximus id metus nec consequat. Suspendisse ac pellentesque nisl. Aliquam urna enim, elementum vitae eleifend pharetra, egestas nec lectus. Nulla ac risus in ipsum euismod blandit non sit amet lacus. Aenean vitae leo nec urna gravida pretium at in sem. Pellentesque sit amet ex et erat pretium tempor vitae nec dolor. Nunc diam neque, rhoncus at nibh id, molestie tempor velit. Suspendisse fermentum cursus ultrices. Vivamus neque nibh, ullamcorper vel elementum in, congue vel turpis. Curabitur vestibulum tellus id erat imperdiet, eu tempus purus viverra. Cras eu eros a erat cursus consectetur. Aenean consectetur interdum sapien, quis congue nibh maximus pellentesque. Vivamus eu ultrices lorem.</p>

		<p>Ut convallis neque mi, et auctor nunc consequat nec. Ut dui ante, viverra in nulla et, ultrices consectetur ipsum. Morbi sit amet gravida magna, sed venenatis odio. Phasellus consequat, nisi in blandit varius, nibh ex malesuada mauris, in tempus nisl augue et ipsum. Ut vestibulum, sapien a porta hendrerit, nulla arcu ultricies quam, id luctus est nisl vitae quam. Duis in interdum ante, a tincidunt velit. Donec pellentesque lacus auctor, fringilla turpis nec, vulputate nunc. Etiam varius pharetra lorem, ut vehicula urna cursus in. Integer ornare suscipit magna, eu pulvinar erat. Aenean vitae lorem dapibus ex egestas porta. Donec bibendum est eu purus facilisis, id venenatis massa varius. Mauris ut tortor vitae lectus mollis faucibus. Nunc mattis purus ac justo volutpat suscipit. Morbi nec posuere arcu. Vestibulum viverra nisi mi, dapibus ultrices elit pharetra nec. Maecenas a justo eget mauris commodo mollis.</p>
		
		<p>Fusce ut eros eu dui ornare elementum vel ac ipsum. Ut interdum justo a quam scelerisque rutrum. Donec ultricies venenatis tempus. Mauris sagittis, massa et faucibus aliquet, mauris erat aliquam eros, sit amet aliquet lacus est accumsan dui. Nullam ac fringilla ipsum, eget sollicitudin lorem. Integer viverra aliquam urna ut rutrum. Morbi non sodales metus. Nullam quam leo, ullamcorper laoreet risus eget, malesuada dictum lorem. Sed gravida nisi quis iaculis interdum. Quisque eu turpis ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		
		<p>Duis nec nunc quis justo interdum sagittis. Praesent aliquam, mi id molestie tempor, velit felis pharetra velit, in gravida est tortor pretium neque. Pellentesque vitae molestie nibh, maximus fermentum diam. Morbi sed placerat est. Ut euismod ligula id dapibus hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sodales, velit ac posuere ornare, purus augue fermentum quam, quis bibendum erat ipsum egestas est. Integer quis facilisis turpis, sed efficitur risus. Pellentesque at augue eu lacus porttitor vulputate eu eget lectus. Suspendisse quis orci eget arcu feugiat porttitor et nec augue. Mauris ac ultrices odio. In sem lacus, porta eu lacinia vel, sollicitudin et risus.</p>
		
		<p>Sed at enim fringilla, placerat orci sit amet, accumsan purus. Duis nunc tortor, blandit et turpis sed, posuere cursus tortor. Aliquam tincidunt mi non velit cursus, a porta est accumsan. Donec eu aliquam enim. Vestibulum eget viverra metus, quis egestas ante. Nulla volutpat felis massa, sed volutpat eros rhoncus sit amet. Morbi consectetur magna non nunc semper, at pharetra ligula consectetur. Proin vehicula augue non magna tempor, a accumsan est laoreet. Praesent quis scelerisque risus, eget condimentum libero. In bibendum ligula in justo fermentum pretium. Integer pretium eget purus quis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin metus in aliquet interdum. Aliquam pharetra, nisi id suscipit interdum, nunc justo venenatis nisl, tempor pharetra nisi ex a elit. Duis porttitor laoreet justo sed tempor. Quisque vitae maximus lacus.</p>
		
		<p>Praesent aliquam diam quis risus eleifend, et tristique dui auctor. Phasellus sollicitudin consequat sapien nec ultrices. Vestibulum efficitur libero et vestibulum porttitor. Vestibulum dolor nisl, feugiat at porttitor sed, efficitur et sem. Pellentesque dapibus elit eget cursus interdum. Donec orci arcu, vehicula eget dapibus nec, facilisis ut odio. Praesent pulvinar rhoncus est id ornare. Phasellus ac libero tortor. Pellentesque nisi turpis, tincidunt in condimentum vitae, accumsan at eros. Maecenas viverra massa at ipsum varius tincidunt.</p>
		
		<p>Phasellus in rhoncus neque, vel consequat lacus. Cras elementum sollicitudin lectus vitae accumsan. Sed vestibulum sem eu elit condimentum dapibus. Vivamus molestie mi ac tellus blandit, in efficitur ex efficitur. Pellentesque lobortis mi et magna porta fringilla. Aliquam erat volutpat. Sed id sodales quam. Sed dictum cursus ante, vel dignissim arcu ullamcorper sed. Maecenas nulla velit, iaculis sit amet ipsum mattis, tincidunt ultricies diam. Donec vestibulum vel nulla ut posuere. Donec viverra non urna et efficitur. Quisque semper tristique dolor ac porta.</p>
		
		<p>Donec a suscipit diam. Integer eleifend dui eleifend interdum interdum. Cras a cursus elit. Vestibulum in nunc eget ligula gravida dictum. Cras vehicula felis non augue mollis venenatis. Etiam efficitur, ex elementum sodales ornare, enim erat convallis libero, sed semper lacus massa non tellus. Fusce porta nunc vitae sapien sollicitudin placerat. Mauris sit amet magna est. Ut viverra erat metus, eget condimentum ante bibendum sit amet. Nam sed risus at risus finibus mollis. Sed dictum sollicitudin tellus, nec maximus est suscipit a. Mauris finibus scelerisque magna, vitae faucibus ligula vulputate sed. Maecenas blandit tincidunt leo maximus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis et justo nibh.</p>
		
		<p>Nunc congue justo vitae orci vulputate, ut accumsan libero tempor. Nullam vulputate ut lorem sit amet luctus. In hac habitasse platea dictumst. Suspendisse sed arcu quam. Aliquam erat volutpat. Vivamus dui turpis, pulvinar ut ipsum ac, varius pellentesque lacus. Ut in sem eget odio molestie pharetra. Nunc vel mauris libero. Nulla ipsum purus, facilisis quis lobortis vel, faucibus pharetra turpis. Maecenas velit elit, commodo eget tortor sed, pulvinar dictum lacus. Vivamus hendrerit ullamcorper turpis nec dignissim. Aenean bibendum velit est.</p>
	</div>`,
};

const routes = [
  { path: "/", name: "root" },
  {
    path: `/:'en'/`,
    name: "locale",
    redirect: { name: "home" },
    children: [
      {
        path: "",
        name: HOME,
        component: HomeView,
      },
      {
        path: ABOUT,
        name: ABOUT,
        component: AboutView,
      },
      {
        path: EXAMPLE,
        name: EXAMPLE,
        component: ExampleView,
      },
      {
        path: EXAMPLE_LONG,
        name: EXAMPLE_LONG,
        component: ExampleLongView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
