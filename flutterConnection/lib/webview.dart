import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebView extends StatefulWidget{
  const WebView({super.key});

  @override
_WebViewState createState() => _WebViewState();
}
class _WebViewState extends State<WebView>{
  final controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadRequest(Uri.parse("http://192.168.189.180:3000",) );

  @override
  Widget build(BuildContext context){
    return SafeArea(child: WebViewWidget(controller: controller,));

  }

}